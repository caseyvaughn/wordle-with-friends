import { useState, useEffect} from "react"
import { Link, useParams, Routes, Route, useNavigate } from 'react-router-dom'
import { getAllGames, getOneGame, createGame } from "../services/games"
import { createWord } from "../services/words"
import Game from "../screens/Game"


export default function GamesContainer(props) {
  const [games, setGames] = useState([])
  const [game, setGame] = useState([])
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()
  //destructure game_id as id
  // const { game_id: id } = useParams()
  const params = useParams()
  console.log(params);
  const { id } = useParams();
  const word_id = params.id
  const game_id = params.game_id
  useEffect(() => {
    //   const fetchGames = async () => {
    //     const games = await getAllGames()
    //     setGames(games)
    //   }
    //   fetchGames()
    // }, [toggle])

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
    <div>GamesContainer
      <h1>HELP ME</h1>
      <h1>user won? {game?.user_won}</h1>
      <h1>game id: {game.id}</h1>

      {/* <Routes>
        <Route path='/:id' element={
          <Game
            games={games}
            currentUser={props.currentUser}/>
        } />
      </Routes> */}
    </div>
  )
}
