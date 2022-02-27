import { useState, useEffect} from "react"
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import {getAllWords, getOneWord, createWord, deleteWord} from "../services/words"
import WordCreate from "../screens/WordCreate"
// import Words from "../components/words/Words"
import Words from "../screens/Words"
import WordDetail from "./WordDetail"


export default function WordsContainer(props) {
  const [words, setWords] = useState([])
  const [toggle, setToggle] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchWords = async () => {
      const words = await getAllWords()
      setWords(words)
    }
    fetchWords()
  }, [toggle])


  const handleDelete = async (id) => {
    try {
      await deleteWord(id)
      // setToggle(prevToggle => !prevToggle)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleCreate = async (formData) => {
    const {id} = await createWord(formData)
    setToggle(prevToggle => !prevToggle)
    navigate(`/words/${id}`)
  
    // const data = {id: 'value', info: 'whataver'}
    // const id = data.id;
    // const info = data.info;
    // const { id, info } = data;
   
  }
  
  return ( 
    <div>
      <Routes>
        <Route path='/' element={
          <Words
            words={words}
            currentUser={props.currentUser}
          />
        } />
        <Route path='/:id' element={
          <WordDetail
            words={words}
            handleDelete={handleDelete}
            currentUser={props.currentUser}
          />
        } /> 
        <Route path='/create' element={
          <WordCreate
            handleCreate={handleCreate}
          />
        } />
      </Routes>
    </div>
  )
}
