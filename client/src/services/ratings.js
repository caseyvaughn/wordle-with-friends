import { api } from './apiConfig'


export const getWordRatings = async (word_id) => {
  const resp = await api.get(`/words/${word_id}/ratings`)
  return resp.data
}

export const createRating = async (word_id, ratingData) => {
  const resp = await api.post(`/words/${word_id}/ratings`, {rating: ratingData})
  return resp.data
}

export const updateRating = async (word_id, rating_id, ratingData) => {
  const resp = await api.put(`/words/${word_id}/ratings/${rating_id}`, { rating: ratingData })
  return resp.data
}

export const deleteRating = async (word_id, rating_id) => {
  const resp = await api.delete(`/words/${word_id}/ratings/${rating_id}`)
  return resp.data
}






// export const getAllRatings = async () => {
//   const resp = await api.get('/ratings')
//   return resp.data
// }


// export const getOneRating = async (word_id) => {
//   const resp = await api.get(`/ratings/${word_id}`)
//   return resp.data
// }

// export const getRandomWord = async () => {
//   const resp = await api.get()
// }

// export const createWord = async (wordData) => {
//   const resp = await api.post('/ratings', {word: wordData})
//   return resp.data
// }

// //no edit functionality for word!
// // export const updateword = async (word_id, wordData) => {
// //   const resp = await api.put(`/ratings/${word_id}`, {word: wordData})
// //   return resp.data
// // }

// export const deleteWord = async (word_id) => {
//   const resp = await api.delete(`/ratings/${word_id}`)
//   return resp.data
// }