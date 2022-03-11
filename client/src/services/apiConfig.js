import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production' ? 'https://wordle-with-friends-api.herokuapp.com/' : 'http://localhost:3000' 
// const baseURL = 'http://localhost:3000'

export const api = axios.create({
  baseURL
})



// export const api = axios.create({
//   baseURL
//   // baseURL: baseURL
// })