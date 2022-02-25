import { useState } from 'react'
import { registerUser } from '../services/users'
import { useNavigate } from 'react-router-dom'

export default function SignUp(props) {
 const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  return (
    <form onSubmit={async (e) => {
      e.preventDefault()
      const user = {
        username,
        email,
        password
      }
      const resp = await registerUser(user)
      props.setCurrentUser(resp)

      navigate('/')

    }}>
      <input type='text' placeholder ="username" onChange={(e) => setUsername(e.target.value) } value={username} />
      <input type='text' placeholder ="email" onChange={(e) => setEmail(e.target.value) } value={email} />
      <input type='password' placeholder ="password" onChange={ (e) => setPassword(e.target.value)} value={password} />
      <button>Sign Up</button>
    </form>
  )
}
