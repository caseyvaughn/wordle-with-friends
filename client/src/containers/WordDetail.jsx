import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getOneWord } from "../services/words";
import { Card, Button} from 'react-bootstrap';

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
    <div className="card-container create-word">
      <Card style={{ width: "250px", height: "200px" }}>
        <Card.Body>
          <Card.Title className="word-info">Wordle #{word.id}</Card.Title>
          <Card.Subtitle className="word-info mb-2 text-muted">Created by: {word.user?.username}</Card.Subtitle>
          {props.currentUser?.id === word.user_id ?
            <>
              <h1>{word.solution_word}</h1>
              <Button onClick={() => props.handleDelete(word.id)}>Delete Word</Button>
            </>
            :
            <Link to={`/words/${id}/newgame`}>
              <Button>play wordle!</Button>
            </Link>
      }
        </Card.Body>
      </Card>
    </div>
  )
}
