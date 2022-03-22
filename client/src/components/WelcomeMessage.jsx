import React from 'react'
import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/esm/Button'

export default function WelcomeMessage() {
  const [show, setShow] = useState(true)

  if (show) {
    return (
      <Alert
        style={{ width: "50%", margin: "20px" }}
        variant="secondary"
        onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Welcome to Wordle with Friends!</Alert.Heading>
        <p>
          Select "play wordle!" on any game below to play as a guest (no login required). 
          <br/>
          Login or signup to create a Wordle game.
        </p>
      </Alert>
    )
  }
  return (
    <Button variant="secondary" style={{ margin: "20px" }} onClick={() => setShow(true)}>Show Wordle with Friends Instructions</Button>
  )
}
