import { useState } from 'react'
import { registerUser } from '../services/users'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function SignUp(props) {
 const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <Form onSubmit={async (e) => {
      e.preventDefault()
      const user = {
        username,
        email,
        password
      }
      const resp = await registerUser(user)
      props.setCurrentUser(resp)
      navigate('/words')
    }}
    style={{"padding": "30px", "textAlign":"left"}}>
      <Form.Group>
        <Form.Label>username</Form.Label>
        <Form.Control
          style={{ "width": "50%"}}
          type='text'
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>email</Form.Label>
        <Form.Control
          style={{ "width": "50%"}}
          type='text'
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>password</Form.Label>
        <Form.Control
          style={{ "width": "50%"}}
          type='password'
          placeholder ="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>confirm password</Form.Label>
        <Form.Control
          style={{ "width": "50%"}}
          type='password'
          placeholder ="confirm password"
        ></Form.Control>
      </Form.Group>
      <Button style={{ "marginTop": "10px" }} type="submit">sign-up!</Button>
    </Form>
  )
}
