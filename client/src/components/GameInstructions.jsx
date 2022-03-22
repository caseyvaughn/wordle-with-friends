import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Button } from 'react-bootstrap';
import { useState } from 'react';

export default function GameInstructions() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button style={{ margin: "10px" }} variant="secondary" onClick={handleShow} className="me-2">How to Play</Button>

      <Offcanvas placement="top" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>How to Play</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Guess the 5-letter WORDLE in six tries.
          <br/>
          After each guess, the color of the tiles and keys will change to show how close your guess was to the word.
          <br />
          <div className="dot correct"></div>
          = letter is in the correct spot
          <br/>
          <div className="dot present"></div>
          = letter is in the word, but not in the correct spot
          <br />
          <div className="dot absent"></div>
          = letter is not in the word in any spot 
        </Offcanvas.Body>
      </Offcanvas>

    </div>
  )
}
