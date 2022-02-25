import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneWord } from "../services/words";

export default function WordDetail() {
  const [word, setWord] = useState({})
  // const [ratings, setRatings]=useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  
  useEffect(() => {
    const fetchWord = async () => {
      const word = await getOneWord(id)
      setWord(word)
    }
    fetchWord()
  }, [id])

  return (
    <div>WordDetail
      <h1>{word.solution_word}</h1>
    </div>
  )
}
