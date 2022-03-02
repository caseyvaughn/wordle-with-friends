import { useState, useEffect} from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { getOneGame, createGame } from "../services/games"


export default function GamesContainer(props) {
  const [game, setGame] = useState([])
  const navigate = useNavigate()
  const params = useParams()
  const word_id = params.id
  const game_id = params.game_id
  
  useEffect(() => {
    const fetchGame = async (word_id, game_id) => {
      const game = await getOneGame(word_id, game_id)
      setGame(game)
      console.log(game)
    }
    fetchGame(word_id, game_id)
  }, [word_id, game_id])

  const handleCreate = async () => {
    await createGame()
    console.log("handleCreate")
  }

  return (
    <div>
      <h1>Game summary:</h1>
      <h1>player: {game.user?.username}</h1>
      <h1>game id: {game.id}</h1>
      <h1>guesses: {game.guesses}</h1>
      {game.user_won ?
        <h1> Congrats, {game.user?.username}! You solved this wordle with {game.guesses} guesses!</h1>
        :
        <h2> Sorry, {game.user?.username}, you lost. Try another wordle! </h2>}
    </div>
  )
}
