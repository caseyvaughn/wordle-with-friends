import { useState, useEffect} from "react"
import { useParams, useNavigate } from 'react-router-dom'
import { getOneWord } from "../../services/words"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Keyboard from "./Keyboard"
import "./Game.css"

export default function Game(props) {
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
  console.log({charArray})
  
  const [error, setError] = useState(false);
  const handleError = () =>{
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  }

  useEffect(() => {
    if(!boardData || !boardData.solution){
      // var alphabetIndex = Math.floor(Math.random() * 26);
      // var wordIndex = Math.floor(Math.random() * wordList[String.fromCharCode(97 + alphabetIndex)].length);
      let newBoardData={...boardData, "solution": word.solution_word,
                                 "rowIndex":0,
                                 "boardWords":[],
                                 "boardRowStatus":[],
                                 "presentCharArray":[],
                                 "absentCharArray":[],
                                 "correctCharArray":[],
                                 "status":"IN_PROGRESS"}; 
      setBoardData(newBoardData);                      
    }
  }, []);

  const enterBoardWord = (guessWord) => {
    console.log("enterBoardWord", guessWord)
    let boardWords = boardData.boardWords;
    let boardRowStatus = boardData.boardRowStatus;
    let solution = word.solution_word;
    let presentCharArray = boardData.presentCharArray;
    let absentCharArray = boardData.absentCharArray;
    let correctCharArray = boardData.correctCharArray;
    let rowIndex = boardData.rowIndex;
    let rowStatus = [];
    let matchCount = 0;
    let status = boardData.status;
    for(var index=0; index<guessWord.length; index++){
      if(solution.charAt(index) === guessWord.charAt(index)){
        matchCount++;
        rowStatus.push("correct");
        if(!correctCharArray.includes(guessWord.charAt(index))) correctCharArray.push(guessWord.charAt(index));
        if(presentCharArray.indexOf(guessWord.charAt(index))!== -1) presentCharArray.splice(presentCharArray.indexOf(guessWord.charAt(index)),1);
      }else if(solution.includes(guessWord.charAt(index))){
        rowStatus.push("present");
        if(!correctCharArray.includes(guessWord.charAt(index)) 
                && !presentCharArray.includes(guessWord.charAt(index))) presentCharArray.push(guessWord.charAt(index));
      }else{
        rowStatus.push("absent");
        if(!absentCharArray.includes(guessWord.charAt(index))) absentCharArray.push(guessWord.charAt(index));
      }
    }
    if (matchCount === 5) {
      console.log("WIN!")
    } else if (rowIndex + 1 === 6) {
      console.log("LOST")
    }
    boardRowStatus.push(rowStatus);

    boardWords[rowIndex] = guessWord;
    console.log(`board words: ${boardWords}`)
    
    let newBoardData={...boardData,
                                "boardWords":boardWords,
                                "boardRowStatus":boardRowStatus,
                                "rowIndex":rowIndex+1,
                                "status":status,
                                "presentCharArray":presentCharArray,
                                "absentCharArray":absentCharArray,
                                "correctCharArray":correctCharArray};
    setBoardData(newBoardData);  
  }
  console.log(boardData)

  const enterCurrentText = (guessWord) => {
    let boardWords = boardData.boardWords;
    let rowIndex=boardData.rowIndex;
    boardWords[rowIndex]=guessWord;
    let newBoardData={...boardData,
                      "boardWords":boardWords};
    setBoardData(newBoardData); 
  }

  //handle keyboard input
  const handleKeyboard = (key) => {
    //handle if the user has already completed the game! if row index >5 or user wins, don't complete rest of the game user has completed 
    if (boardData.rowIndex > 5 || boardData.status === "WIN") return;
    if (key === "ENTER") {
      if (charArray.length === 5) {
        let guessWord = charArray.join("").toLowerCase();
        enterBoardWord(guessWord);
        setCharArray([]);
      }
      return;
    }
    if (key === "⌫") {
      //if user hits backspace, it will remove the last letter (last in, first out!)
      charArray.splice(charArray.length-1,1);
      setCharArray([...charArray]);
    }
    else if(charArray.length<5){
      charArray.push(key);
      setCharArray([...charArray]);
  }
  enterCurrentText(charArray.join("").toLowerCase());
  }

  console.log(boardData)

  return (
    <div>
      <h2>play new game!!</h2>
      <h2>solution word: {word.solution_word}</h2>
      <div className='game-container'>
          <div className='top'>
            <div className='title'>WORDLE CLONE</div>
          </div>
          <div className='cube'>
              {[0,1,2,3,4,5].map((row,rowIndex)=>(
                <div className={'cube-row'} key={rowIndex}>
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
