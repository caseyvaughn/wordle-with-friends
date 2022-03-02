import { useState, useEffect} from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { getWordRatings, createRating, deleteRating, updateRating } from "../services/ratings"
import RatingCreate from "../components/ RatingCreate"

import React from 'react'

export default function RatingsContainer(props) {
  const [ratings, setRatings] = useState([])
  const { id } = useParams()
  const [ratingID, setRatingID] = useState(undefined)
 
  const [averageRating, setAverageRating] = useState(undefined)
  
 
  
  // console.log(ratings)
  
  useEffect(() => {
    const fetchRatings = async () => {
      console.log(ratings)
      const fetchedRatings = await getWordRatings(id)
      setRatings(fetchedRatings)
      const userRating = fetchedRatings.find(r => r.user?.id === props.currentUser?.id)
      const difficulty = fetchedRatings.map(r => r.difficulty_rating)
      setAverageRating(difficulty.reduce((a, b) => a + b) / fetchedRatings.length)
      console.log(difficulty)
      console.log(averageRating)
      
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

  const handleRatingDelete = async (review_id) => {
    await deleteRating(id, review_id)
  }
  return (
    <div>
      <RatingCreate handleRatingCreate={!ratingID ? handleRatingCreate : handleRatingEdit} />
      {averageRating && <p>Average Difficulty Rating: {averageRating}</p>}
    </div>
  )
}
