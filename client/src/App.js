import './App.css';
import { useEffect, useState } from 'react'
import { Routes, Route} from 'react-router-dom'
import { verifyUser } from './services/users';
import SignUp from './components/SignUp'
import Login from './components/Login';
import NavBar from './components/NavBar';
import WordsContainer from './containers/WordsContainer';
import Footer from './components/Footer';

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
      <NavBar currentUser={currentUser} logout={logout}/>
      <Routes>
        <Route path="/" element={<WordsContainer currentUser={currentUser}/>}/>
        <Route path="/login" element={<Login setCurrentUser={setCurrentUser}/>}/>
        <Route path="/signup" element={<SignUp setCurrentUser={setCurrentUser} />} />
        {/* <Route path='/words/:word_id/games/*' element={<GamesContainer currentUser={currentUser}/>} /> */}
        <Route path='/words/*' element={<WordsContainer currentUser={currentUser} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
