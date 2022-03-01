import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormCheck from 'react-bootstrap/FormCheck'
import RangeSlider from "react-bootstrap-range-slider"
//github page with react bootstrap rangeslider examples:
//https://jaywilz.github.io/react-bootstrap-range-slider/

export default function RatingCreate(props) {
  const [difficulty_rating, setDifficulty_rating] = useState(0)
  // const [is_real_word, setIs_real_word]=useState(null)
  
    return (
      <div>
        <h2>RatingCreate.jsx</h2>
        <Form onSubmit={async (e) => {
          e.preventDefault()
          const rating = {
            difficulty_rating,
            // is_real_word
          }
          props.handleRatingCreate(rating)
        }}>
         
          <Form.Group>
            <Form.Label>Please rate the word's difficulty easiest to hardest</Form.Label>
            <p></p>
              <RangeSlider
                value={difficulty_rating}
                onChange={e => setDifficulty_rating(e.target.value)}
                min={1}
                max={5}
              />
            </Form.Group>
          {/* <Form.Group>
            <Form.Check
              type="checkbox"
              checked={false}
              //on change to toggle this!!!!!
              label="Flag word"/>
          </Form.Group> */}
        </Form>
        <p></p>
        <Button size="sm" type="submit" style={{"width":"20%"}}>submit rating</Button>
      </div>
    )
}

