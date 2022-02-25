import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { verifyUser } from './services/users';
import SignUp from './components/SignUp'
import Login from './components/Login';

function App() {
   const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const getUser = async () => {
      const user = await verifyUser()
      setCurrentUser(user)
    }
    getUser()
  }, [])

  const logout = () => {
    localStorage.removeItem('authToken')
    setCurrentUser(null)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Wordle with Friends</h1>}/>
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>}/>
        <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser}/>}/>
      </Routes>
    </div>
  );
}

export default App;
