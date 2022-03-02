import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Container from "react-bootstrap/esm/Container"
import "./NavBar.css"

export default function NavBar(props) {
  return (
      <Navbar bg="light" expand={false} collapseOnSelect>
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
                        {/* <NavLink to="/">play random wordle</NavLink> */}
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
      </Navbar>
  )
}


// export default function NavBar(props) {
//   return (
//       <Navbar bg="light" expand={false} collapseOnSelect>
//         <Container>
//           <Navbar.Brand href="/"> WordleWithFriends</Navbar.Brand>
//           {props.currentUser ?
//             <>
//             <h5>Welcome back, {props.currentUser.username}!</h5>
//             </>
//             : null}
//           <Navbar.Toggle aria-controls="offcanvasNavbar" />
//           <Navbar.Offcanvas
//             id="offcanvasNavbar"
//             aria-labelledby="offcanvasNavbarLabel"
//             placement="end">
//           <Offcanvas.Header closeButton>
//           <Offcanvas.Title id="offcanvasNavbarLabel">Wordle With Friends</Offcanvas.Title>
//             </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                     {props.currentUser ?
//                       <>
//                         <h5>Welcome, {props.currentUser.username}!</h5>
//                         <NavLink to="/words/create" style={{ textDecoration: 'none', color: "black"}}>create a wordle</NavLink>
//                         <NavLink to="/words">browse all wordles</NavLink>
//                         {/* <NavLink to="/">play random wordle</NavLink> */}
//                         <Button onClick={props.logout}>logout</Button>
//                       </>
//                       :
//                       <>
//                         <NavLink to="/login">login</NavLink> <br/>
//                         <NavLink to="/signup">signup</NavLink>
//                       </>}
//                 </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//   )
// }