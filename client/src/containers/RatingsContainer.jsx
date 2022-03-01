import { useState, useEffect} from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { getWordRatings, createRating, deleteRating } from "../services/ratings"
import RatingCreate from "../components/ RatingCreate"

import React from 'react'

export default function RatingsContainer(props) {
  const [ratings, setRatings] = useState([])
  const { id } = useParams()
  
  // useEffect(() => {
  //   const fetchRatings = async (word_id) => {
  //     const ratings = await getWordRatings(word_id)
  //     setRatings(ratings)
  //   }
  //   fetchRatings()
  // }, [id])

  const handleRatingCreate = async (word_id, ratingData) => {
    await createRating(word_id, ratingData)
  }

  const handleRatingDelete = async (review_id) => {
    await deleteRating(id, review_id)
  }
  return (
    <div>
      <h2>RatingsContainer.jsx</h2>
      <RatingCreate handleRatingCreate={handleRatingCreate}/>
    </div>
  )
}