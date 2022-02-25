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
          <h1>Welcome back, {props.currentUser.username}!</h1>
          <Button onClick={props.logout}>logout</Button>
        </>
        :
        <>
          <NavLink to="/login">login</NavLink> <br/>
          <NavLink to="/signup">signup</NavLink>
        </>}
          <NavLink to="/">browse all wordles</NavLink>
          <NavLink to="/">play random wordle</NavLink>
          </Container>
      </Navbar>
      </div>
  )
}
