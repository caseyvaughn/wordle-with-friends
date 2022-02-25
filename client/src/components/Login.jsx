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
      navigate('/')
    }}>
      <Form.Group>
        <Form.Label>username</Form.Label>
        <Form.Control
          placeholder="username"
          type='text'
          onChange={(e) => setUsername(e.target.value)}
          value={username}></Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>password</Form.Label>
        <Form.Control
          placeholder="password"
          type='password' onChange={(e) => setPassword(e.target.value)}
          value={password}></Form.Control>
      </Form.Group>
    <Button type="submit">login</Button>
  </Form>
    )
}

