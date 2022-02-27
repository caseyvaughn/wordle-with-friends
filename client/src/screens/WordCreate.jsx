import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export default function WordCreate(props) {
  const navigate = useNavigate()
  const [solution_word, setSolution_word] = useState('')
  const { id } = useParams()
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        const word = {
          solution_word
        }
        console.log(word)
        props.handleCreate(word)
        // navigate(`/words/${id}`)
        // //id is turning up as undefined!!!
        // console.log(`/words/${id}`)
      }}>
      <Form.Group>
        <Form.Label>solution word</Form.Label>
        <Form.Control
          type='text'
          placeholder="Please submit a 5-letter word"
          onChange={(e) => setSolution_word(e.target.value)}
          value={solution_word}
        ></Form.Control>
      </Form.Group>
      <Button type="submit">create a new wordle!</Button>
    </Form>
    
  )
}
