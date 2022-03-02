import { useState, useEffect} from "react"
import { useParams} from 'react-router-dom'
import { getOneWord } from "../../services/words"
import Keyboard from "../Keyboard/Keyboard"
import "./Game.css"
import RatingsContainer from "../../containers/RatingsContainer"
import LetterBoard from "./LetterBoard"

export default function Game(props) {
  //fetch the solution word the user is guessing against 
  const [word, setWord] = useState({})
  const { id } = useParams()
  useEffect(() => {
    const fetchWord = async () => {
      const word = await getOneWord(id)
      setWord(word)
    }
    fetchWord()
  }, [id])

  const [boardData, setBoardData] = useState(undefined)
  const [charArray, setCharArray] = useState([])

  useEffect(() => {
    if(!boardData || !boardData.solution){
      let newBoardData={...boardData, "solution": word.solution_word,
                                 "rowIndex":0,
                                 "boardWords":[],
                                 "boardRowStatus":[],
                                 "presentCharArray":[],
                                 "absentCharArray":[],
                                 "correctCharArray":[],
                                 "gameStatus":"IN_PROGRESS"}; 
      setBoardData(newBoardData);                      
    }
  }, []);

  //check each character of guessWord against solution; populate row status with the letter status
  const checkGuess = (guessWord, solution) => {
    const rowStatus = Array.from(guessWord).map((c, index) => {
      if (c === solution[index]) {
        return "correct"
      } else if (solution.includes(c)) {
        return "present"
      } return "absent"
    })
    return rowStatus
  }

  const enterBoardWord = (guessWord) => {
    let {boardWords, boardRowStatus, presentCharArray, absentCharArray, correctCharArray, rowIndex, gameStatus} = boardData
    let solution = word.solution_word;
    let rowStatus = checkGuess(guessWord, solution);
    const wonGame = rowStatus.every((value) => value === "correct")  

    for (let i = 0; i < guessWord.length; i++){
      const guessChar=guessWord[i]
      if(rowStatus[i]==="correct"){
        if(!correctCharArray.includes(guessChar)) correctCharArray.push(guessChar);
        if(presentCharArray.indexOf(guessChar)!== -1) presentCharArray.splice(presentCharArray.indexOf(guessChar),1);
      }else if(rowStatus[i]==="present"){
        if(!correctCharArray.includes(guessChar) 
                && !presentCharArray.includes(guessChar)) presentCharArray.push(guessChar);
      }else{
        if(!absentCharArray.includes(guessChar)) absentCharArray.push(guessChar);
      }
    }
    
    //logic for final game status
    if (wonGame) {
      gameStatus = "WIN";
      console.log(gameStatus)
    } else if (rowIndex + 1 === 6) {
      console.log("LOST")
      gameStatus="LOST";
    }

    boardRowStatus.push(rowStatus);
    boardWords[rowIndex] = guessWord;
    
    //send updated board data to the board (send the react state)
    let newBoardData={...boardData,
                                "boardWords":boardWords,
                                "boardRowStatus":boardRowStatus,
                                "rowIndex":rowIndex+1,
                                "gameStatus":gameStatus,
                                "presentCharArray":presentCharArray,
                                "absentCharArray":absentCharArray,
                                "correctCharArray":correctCharArray};
    setBoardData(newBoardData);  
  }

  const enterCurrentText = (guessWord) => {
    const { boardWords, rowIndex } = boardData
    boardWords[rowIndex]=guessWord;
    let newBoardData={...boardData, "boardWords":boardWords};
    setBoardData(newBoardData); 
  }

  //handle keyboard input
  const handleKeyboard = (key) => {
    //if the user has completed the game (if row index >5) or user wins, stop the game
    if (boardData.rowIndex > 5 || boardData.gameStatus === "WIN") return;
    //if user is still playing & enters a 5-letter word, submit the guess word
    if (key === "ENTER") {
      if (charArray.length === 5) {
        let guessWord = charArray.join("").toLowerCase();
        enterBoardWord(guessWord);
        setCharArray([]);
      }
      return;
    }
    //if user hits backspace, it will remove the last letter (last in, first out!)
    if (key === "⌫") {
      charArray.splice(charArray.length-1,1);
      setCharArray([...charArray]);
    }
    //if user is still completing their entry, add letters to the charArray
    else if(charArray.length<5){
      charArray.push(key);
      setCharArray([...charArray]);
  }
  enterCurrentText(charArray.join("").toLowerCase());
  }

  return (
    <div>
      {boardData && <> 
      <h4>solution word: {word.solution_word}</h4>
      {boardData?.gameStatus === "WIN" ?
          <>
          <h1>Congratulations, you won!</h1>
          <RatingsContainer currentUser = {props.currentUser}/>
          </>
        :
          null}
        {boardData?.gameStatus === "LOST" ?
        <>  <h1>Better luck next time!</h1>
            <h1>word #{word.id}: {word.solution_word}</h1>
          </>
          : null
          }
      <div className='game-container'>
          <div className='title top'>WORDLE GAME #{word.id}</div>
          <LetterBoard boardData={boardData}/>
          <Keyboard boardData={boardData} handleKeyboard = {handleKeyboard}/>
      </div>
      </>}
    </div>
  )
}
