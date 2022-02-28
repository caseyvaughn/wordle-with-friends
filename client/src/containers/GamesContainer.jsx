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
  const { id } = useParams()

  useEffect(() => {
    //   const fetchGames = async () => {
    //     const games = await getAllGames()
    //     setGames(games)
    //   }
    //   fetchGames()
    // }, [toggle])

    const fetchGame = async (id) => {
      const game = await getOneGame(id)
      setGame(game)
    }
    fetchGame()
  }, [id])

  const handleCreate = async () => {
    await createGame()
    console.log("handleCreate")
  }

  return (
    <div>GamesContainer
      <h1>HELP ME</h1>

      <Routes>
        <Route path='/:id' element={
          <Game
            games={games}
            currentUser={props.currentUser}/>
        } />
      </Routes>
    </div>
  )
}
