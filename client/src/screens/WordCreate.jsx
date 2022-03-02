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
        props.handleCreate(word)
        navigate(`/words/${id}`)
      }}
      style={{"padding": "30px", "textAlign":"left"}}>
      <Form.Group>
        <Form.Control
          style={{ "width": "50%"}}
          type='text'
          placeholder="Please submit a 5-letter word"
          onChange={(e) => setSolution_word(e.target.value)}
          value={solution_word}
        ></Form.Control>
      </Form.Group>
      <Button type="submit" style={{ "marginTop": "10px" }}>create a new wordle!</Button>
    </Form>
  )
}
