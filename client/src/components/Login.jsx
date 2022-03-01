import {useState} from 'react'
import { loginUser } from '../services/users'
import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Login(props) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  return (
    <Form onSubmit={async (e) => {
      e.preventDefault()
      const user = {
        username,
        password
      }
      const resp = await loginUser(user)
      props.setCurrentUser(resp)
      navigate('/words')
    }}
    style={{"padding": "30px", "text-align":"left"}}>
      <Form.Group>
        <Form.Label>username</Form.Label>
        <Form.Control
          style={{ "width": "50%"}}
          placeholder="username"
          type='text'
          onChange={(e) => setUsername(e.target.value)}
          value={username}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>password</Form.Label>
        <Form.Control
          style={{ "width": "50%"}}
          placeholder="password"
          type='password' onChange={(e) => setPassword(e.target.value)}
          value={password}></Form.Control>
      </Form.Group>
    <Button style={{ "margin-top": "10px" }} type="submit">login</Button>
  </Form>
    )
}

