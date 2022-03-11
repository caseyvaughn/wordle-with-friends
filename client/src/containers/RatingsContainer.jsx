import { useState, useEffect} from "react"
import { useParams} from 'react-router-dom'
import { getWordRatings, createRating, updateRating } from "../services/ratings"
import RatingCreate from "../components/ RatingCreate"

import React from 'react'

export default function RatingsContainer(props) {
  const [ratings, setRatings] = useState([])
  const { id } = useParams()
  const [ratingID, setRatingID] = useState(undefined)
  const [averageRating, setAverageRating] = useState(undefined)
  
  useEffect(() => {
    const fetchRatings = async () => {
      const fetchedRatings = await getWordRatings(id)
      setRatings(fetchedRatings)
      console.log(ratings)
      const userRating = fetchedRatings.find(r => r.user?.id === props.currentUser?.id)
      const difficulty = fetchedRatings.map(r => r.difficulty_rating)
      setAverageRating(difficulty.reduce((a, b) => a + b) / fetchedRatings.length)
      
      if (userRating) {
        setRatingID(userRating.id)
      }      
    }
    fetchRatings()
  }, [id, props.currentUser])

  const handleRatingCreate = async (ratingData) => {
    const resp = await createRating(id, ratingData)
    setRatingID(resp.id)
  }
  
  const handleRatingEdit = async (ratingData) => {
    await updateRating(id, ratingID, ratingData)
  }

  return (
    <div>
      <RatingCreate handleRatingCreate={!ratingID ? handleRatingCreate : handleRatingEdit} />
      {/* {averageRating && <p>Average Difficulty Rating: {averageRating}</p>} */}
    </div>
  )
}
