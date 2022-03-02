import { useState, useEffect} from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { getOneWord } from "../../services/words"
import Keyboard from "./Keyboard"
import "./Game.css"
import RatingsContainer from "../../containers/RatingsContainer"
import RatingCreate from "../ RatingCreate"

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
  console.log(boardData);

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
      }else if(solution.includes(guessChar)){
        if(!correctCharArray.includes(guessChar) 
                && !presentCharArray.includes(guessChar)) presentCharArray.push(guessChar);
      }else{
        if(!absentCharArray.includes(guessChar)) absentCharArray.push(guessChar);
      }
    }
    
    if (wonGame) {
      gameStatus = "WIN";
      console.log(gameStatus)
    } else if (rowIndex + 1 === 6) {
      console.log("LOST")
      gameStatus="LOST";
    }



    boardRowStatus.push(rowStatus);
    boardWords[rowIndex] = guessWord;
    
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
    let boardWords = boardData.boardWords;
    let rowIndex=boardData.rowIndex;
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
      <h4>solution word: {word.solution_word}</h4>
      {boardData?.gameStatus === "WIN" ?
        <>
          <h1>Congratulations, you won!</h1>
          <RatingsContainer/>
        </>
        :
        null}
      <div className='game-container'>
          <div className='top'>
            <div className='title'>WORDLE GAME #{word.id}</div>
          </div>
        
          <div className='game-cube'>
              {[0,1,2,3,4,5].map((row,rowIndex)=>(
                <div className={'letter-row'} key={rowIndex}>
                    {
                      [0,1,2,3,4].map((column,letterIndex)=>(
                        <div key={letterIndex} className={`letter ${boardData && boardData.boardRowStatus[row]?boardData.boardRowStatus[row][column]:""}`}>
                          {boardData && boardData.boardWords[row] && boardData.boardWords[row][column]}
                        </div>
                      ))
                    }
                </div>
              ))}
          </div>
          <div className='bottom'>
            <Keyboard boardData={boardData} 
                      handleKeyboard = {handleKeyboard}/>
        </div>
        
        </div>
    </div>
  )
}
