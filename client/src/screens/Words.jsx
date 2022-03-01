import { Link } from 'react-router-dom'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import "./Words.css"

export default function Words(props) {
  console.log(props.currentUser?.id);
  
  return (
    <div>
      <Container className="grid" class="m-5 pb-5">
        <Row>
          {props.words.map(word => {
            return (
              <Col xs="12" sm="6" lg="4" xl="3" key={word.id}>
                <Card style={{ width: "250px", height: "150px" }} key={word.id}>
                  <Card.Body>
                    <Card.Title className="word-info">Wordle #{word.id}</Card.Title>
                      <Card.Subtitle className="word-info mb-2 text-muted">Created by: {word.user.username}</Card.Subtitle>
                      <div className="dot-row">
                        {[0, 1, 2, 3, 4].map(() => (
                          <div className="dots">?</div>))}
                      </div>
                      <Link key={word.id} to={`/words/${word.id}/newgame`}><Button size="sm">play word!</Button></Link>
                  </Card.Body>
                  </Card>
              </Col>
            )
          })
      }
        </Row>
      </Container>
    </div>
  )
}

