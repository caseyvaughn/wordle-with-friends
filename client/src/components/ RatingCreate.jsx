import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormCheck from 'react-bootstrap/FormCheck'

export default function RatingCreate(props) {
  const [difficulty_rating, setDifficulty_rating] = useState(0)
  const [is_real_word, setIs_real_word]=useState(null)
  

    return (
      <div> RatingCreate
        <Form onSubmit={async (e) => {
          e.preventDefault()
          const rating = {
            difficulty_rating,
            is_real_word
          }
          props.handleRatingCreate(rating)
        }}>
          <Form.Group>
            <Form.Label>rate this word's difficulty:</Form.Label>
            <Form.Control
              type="text"
              value={difficulty_rating}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Check
              type="checkbox"
              checked={setIs_real_word(false)}
              label="Flag word"/>
          </Form.Group>
        </Form>
      </div>
    )
}

