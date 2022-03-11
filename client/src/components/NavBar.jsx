import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/esm/Button'
import Container from "react-bootstrap/esm/Container"
import { NavLink } from 'react-router-dom'

export default function NavBar(props) {
 
  return (
      <Navbar collapseOnSelect bg="light" variant="light" expand="lg">
        <Container>
        <Navbar.Brand href="/words" style={{fontSize: "2rem"}}
          className="cabin gray">Wordle
          <span className="yellow">With</span>
          <span className="green">Friends</span> </Navbar.Brand>
          {props.currentUser ?
            <>
            <h5 style={{fontStyle:"italic", paddingTop:"10px"}}>Welcome, {props.currentUser.username}!</h5>
            </>
          : null}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar" >
        <Nav className="ml-auto">
              {props.currentUser ?
              <>
                      <NavLink className="custom-nav-link" to="/words/create" style={{ textDecoration: "none" }}>create a wordle</NavLink>
                      <NavLink className="custom-nav-link" style={{ textDecoration: "none"}} to="/words">browse all wordles</NavLink>
                      <Button variant="secondary" className="custom-nav-link" style={{ width: "75px" }} onClick={props.logout}>logout</Button>
                      </>
                      :
                      <>
                      <NavLink className="custom-nav-link" style={{ textDecoration: "none", fontSize:"1.2rem" }} to="/login">login</NavLink>
                      <NavLink className="custom-nav-link" style={{ textDecoration: "none", fontSize:"1.2rem" }} to="/signup">signup</NavLink>
                      </>}
            </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}

