import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneGame } from "../services/games";
import { getOneWord } from "../services/words";


export default function Game(props) {
  // const [word, setWord] = useState({})
  // const [game, setGame] = useState({})
  // // const [ratings, setRatings]=useState([])
  // const { id } = useParams()
  // const navigate = useNavigate()

  // useEffect(() => {
  // //   const fetchWord = async () => {
  // //     const word = await getOneWord(id)
  // //     setWord(word)
  // //   }
  // //   fetchWord()
  // // }, [id]

  //   const fetchGame = async () => {
  //     const game = await getOneGame(id)
  //     setGame(game)
  //   }
  //   fetchGame()
  // }, [id])
  console.log("props", props)
  
  return (
    <div>
      <h1>Game!</h1>
      {/* <h2>{props.game.user_id}</h2>
      <h2>{props.word.solution_word}</h2> */}
    </div>
  )
}
