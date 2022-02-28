import { api } from './apiConfig'

export const getAllGames = async () => {
  const resp = await api.get('/games')
  return resp.data
}

export const getOneGame = async (word_id, game_id) => {
  const resp = await api.get(`/words/${word_id}/games/${game_id}`)
  return resp.data
}

export const getRandomGame = async () => {
  const resp = await api.get()
}

export const createGame = async (gameData) => {
  const resp = await api.post('/games', {game: gameData})
  return resp.data
}

export const deleteGame = async (game_id) => {
  const resp = await api.delete(`/games/${game_id}`)
  return resp.data
}