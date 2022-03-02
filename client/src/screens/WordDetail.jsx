import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getOneWord } from "../services/words";
import { Card, Button } from 'react-bootstrap';
import RatingsContainer from "../containers/RatingsContainer";

export default function WordDetail(props) {
  const [word, setWord] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const fetchWord = async () => {
      const word = await getOneWord(id)
      setWord(word)
    }
    fetchWord()
  }, [id])

  return (
    <div className="card-container create-word">
      <Card style={{ width: "300px", height: "400px" }}>
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
          <RatingsContainer currentUser = {props.currentUser}/>
        </Card.Body>
      </Card>
    </div>
  )
}
