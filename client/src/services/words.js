import { api } from './apiConfig'

export const getAllWords = async () => {
  const resp = await api.get('/words')
  return resp.data
}

export const getOneWord = async (word_id) => {
  const resp = await api.get(`/words/${word_id}`)
  return resp.data
}

export const createWord = async (wordData) => {
  const resp = await api.post('/words', {word: wordData})
  return resp.data
}

//no edit functionality for word!
// export const updateword = async (word_id, wordData) => {
//   const resp = await api.put(`/words/${word_id}`, {word: wordData})
//   return resp.data
// }

export const deleteWord = async (word_id) => {
  const resp = await api.delete(`/words/${word_id}`)
  return resp.data
}