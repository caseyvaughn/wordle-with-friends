import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/esm/Button'
import Container from "react-bootstrap/esm/Container"
import { NavLink} from 'react-router-dom'

export default function NavBar(props) {
 
  return (
      <Navbar collapseOnSelect
      bg="light"
      variant="light"
      expand="lg">
        <Container>
          <Navbar.Brand href="/words"> WordleWithFriends</Navbar.Brand>
          {props.currentUser ?
            <>
            <h5>Welcome back, {props.currentUser.username}!</h5>
            </>
          : null}
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar" >
        <Nav className="mr-auto">
                
              {props.currentUser ?
                      <>
                        <NavLink to="/words/create">create a wordle</NavLink>
                        <NavLink to="/words">browse all wordles</NavLink>
                        <Button onClick={props.logout}>logout</Button>
                      </>
                      :
                      <>
                        <NavLink to="/login">login</NavLink> <br/>
                        <NavLink to="/signup">signup</NavLink>
                      </>}
            </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}

