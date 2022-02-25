import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Container from "react-bootstrap/esm/Container"

export default function NavBar(props) {
  return (
    <div>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand to="/">WordleWithFriends</Navbar.Brand>
      {props.currentUser ?
        <>
         <h5>Welcome, {props.currentUser.username}!</h5>
          <NavLink to="/words/create">create a wordle</NavLink>
          <NavLink to="/words">browse all wordles</NavLink>
          <NavLink to="/">play random wordle</NavLink>
          <Button onClick={props.logout}>logout</Button>
        </>
        :
        <>
          <NavLink to="/login">login</NavLink> <br/>
          <NavLink to="/signup">signup</NavLink>
        </>}
  
          </Container>
      </Navbar>
      </div>
  )
}
