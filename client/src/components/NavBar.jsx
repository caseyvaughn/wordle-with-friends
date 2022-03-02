import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
// import { NavLink as Nav.Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Container from "react-bootstrap/esm/Container"
import { NavLink, Link } from 'react-router-dom'

export default function NavBar(props) {
  const handleCollapse = () => {
    console.log("handleCollapse");
    // nav.classList.add("collapsed");
  }

  return (
      <Navbar collapseOnSelect
      bg="light"
      variant="light"
      // fixed="top"
      //expand makes navbar responsive; hamburger menu only shows up under medium sized
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
                        {/* <h5>Welcome, {props.currentUser.username}!</h5> */}
                        <Nav.Link eventKey="1" to="/words/create" onClick={handleCollapse}>create a wordle</Nav.Link>
                        <Nav.Link eventKey="2" to="/words">browse all wordles</Nav.Link>
                        <Button onClick={props.logout}>logout</Button>
                      </>
                      :
                      <>
                        <Nav.Link eventKey="3" to="/login">login</Nav.Link> <br/>
                        <Nav.Link eventKey="4" to="/signup">signup</Nav.Link>
                      </>}
            </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>

      //     <Navbar.Toggle aria-controls="offcanvasNavbar" />
      //     <Navbar.Offcanvas
      //       id="offcanvasNavbar"
      //       aria-labelledby="offcanvasNavbarLabel"
      //       placement="end">
      //     <Offcanvas.Header closeButton>
      //     <Offcanvas.Title id="offcanvasNavbarLabel">Wordle With Friends</Offcanvas.Title>
      //       </Offcanvas.Header>
      //         <Offcanvas.Body>
      //           <Nav className="justify-content-end flex-grow-1 pe-3">
      //               {props.currentUser ?
      //                 <>
      //                   <h5>Welcome, {props.currentUser.username}!</h5>
      //                   <NavLink to="/words/create">create a wordle</NavLink>
      //                   <NavLink to="/words">browse all wordles</NavLink>
      //                   <Button onClick={props.logout}>logout</Button>
      //                 </>
      //                 :
      //                 <>
      //                   <NavLink to="/login">login</NavLink> <br/>
      //                   <NavLink to="/signup">signup</NavLink>
      //                 </>}
      //           </Nav>
      //       </Offcanvas.Body>
      //     </Navbar.Offcanvas>
      //   </Container>
      // </Navbar>
  )
}

{/* <Navbar bg="light" expand={false} collapseOnSelect>
<Container>
  <Navbar.Brand href="/words"> WordleWithFriends</Navbar.Brand>
  {props.currentUser ?
    <>
    <h5>Welcome back, {props.currentUser.username}!</h5>
    </>
    : null}
  <Navbar.Toggle aria-controls="offcanvasNavbar" />
  <Navbar.Offcanvas
    id="offcanvasNavbar"
    aria-labelledby="offcanvasNavbarLabel"
    placement="end">
  <Offcanvas.Header closeButton>
  <Offcanvas.Title id="offcanvasNavbarLabel">Wordle With Friends</Offcanvas.Title>
    </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
            {props.currentUser ?
              <>
                <h5>Welcome, {props.currentUser.username}!</h5>
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
    </Offcanvas.Body>
  </Navbar.Offcanvas>
</Container>
</Navbar> */}

