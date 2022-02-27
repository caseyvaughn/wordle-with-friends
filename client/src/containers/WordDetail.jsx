import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOneWord } from "../services/words";
import Button from 'react-bootstrap/Button'

export default function WordDetail(props) {
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
      <h2>{word.user_id}</h2>
      <h2>creator: {word.user?.username}</h2>
      {/* //delete functionality will appear for words the user has created! */}
      {props.currentUser?.id === word.user_id ?
        <>
          <Button onClick={() => props.handleDelete(word.id)}>Delete Word</Button>
        </>
        :
        null
      }
    </div>
  )
}
