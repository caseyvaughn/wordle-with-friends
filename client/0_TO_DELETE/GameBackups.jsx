// import { useState, useEffect} from "react"
// import { useParams, useNavigate } from 'react-router-dom'
// import { getOneWord } from "../../services/words"
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'

// export default function Game(props) {
//   const [word, setWord] = useState({})
//   const [boardData, setBoardData] = useState(JSON.parse(localStorage.getItem("board-data")))
//   const [charArray, setCharArray] = useState([])
//   const { id } = useParams()

//   //handle keyboard input
//   const handleKeyboard = (key) => {
//     //handle if the user has already completed the game! if row index >5 or user wins, don't complete rest of the game user has completed 
//     if (boardData.rowIndex > 5 || boardData.status === "WIN") return;
//     if (key = "ENTER") {
//       if (charArray.length === 5) {
//         let word = charArray.join("").toLowerCase();

//       }
//     }

//   }

//   useEffect(() => {
//     if (!boardData || !boardData.solution) {
//       let newBoardData = {...boardData, }
//     }
    
//   })
//   //create arrays to store each type of letter
//   let presentCharArray = []
//   let absentCharArray = []
//   let correctCharArray=[]



//   // useEffect(() => {
//   //   const fetchWord = async () => {
//   //     const word = await getOneWord(id)
//   //     setWord(word)
//   //   }
//   //   fetchWord()
//   // }, [id])

//   // const array = [...Array(30).keys()];
//   const [guessWord, setGuessWord] = useState({})
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const guessWord = { guessWord }
//     props.setGuessWord(guessWord)
//     // setGuessWord(guessWord)
//     console.log(guessWord)
//   }
//   return (
//     <div>
//       <h2>play new game!!</h2>
//       <h2>{word.solution_word}</h2>
//       <Form onSubmit={async (e) => {
//         e.preventDefault()
//         const guessWord = { }
//       }}>
//         <Form.Group>
//           <Form.Label>guess</Form.Label>
//           <Form.Control
//             type="text"
//             >
//             </Form.Control>
//         </Form.Group>
//         <Button type="submit">submit guess</Button>

//       </Form>

//     </div>
//   )
// }
