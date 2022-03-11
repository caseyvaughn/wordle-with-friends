import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import RangeSlider from "react-bootstrap-range-slider"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
//github page with react bootstrap rangeslider examples:
//https://jaywilz.github.io/react-bootstrap-range-slider/

export default function RatingCreate(props) {
  const [difficulty_rating, setDifficulty_rating] = useState('')
  const navigate=useNavigate()
  // const [is_real_word, setIs_real_word]=useState(null)

    return (
      <div>
        <Form onSubmit={async (e) => {
          e.preventDefault()
          const rating = {
            difficulty_rating,
            // is_real_word
          }
          await props.handleRatingCreate(rating)
          navigate("/words")
        }}>
          <Form.Group>
            <Form.Label>Please rate this word's difficulty (1=easiest, 5=hardest)</Form.Label>
            <p></p>
              <RangeSlider
                value={difficulty_rating}
                onChange={e => setDifficulty_rating(e.target.value)}
                min={1}
                max={5}
              />
          </Form.Group>
            <Button type="submit" >submit rating</Button>
        </Form>
        <p></p>
        
      </div>
    )
}

