import { useState, useEffect } from "react"
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import {getAllWords, getOneWord, createWord, deleteWord} from "../services/words"
import WordCreate from "../screens/WordCreate"
import Words from "../components/words/Words"


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
    await deleteWord(id)
    setToggle(prevToggle => !prevToggle)
    navigate('/')
  }

  const handleCreate = async (formData) => {
    await createWord(formData)
    setToggle(prevToggle => !prevToggle)
    navigate('/')
  }
  
  return (
    <div>
      <Routes>
        {/* {/* <Route path='/' element={
          <Products
            products={products}
            currentUser={props.currentUser}
          />
        } /> */}
        {/* <Route path='/:id' element={
          <ProductDetail
            products={products}
            handleDelete={handleDelete}
            currentUser={props.currentUser}
          />
        } /> * */}
        <Route path='/create' element={
          <WordCreate
            handleCreate={handleCreate}
          />
        } />
      </Routes>
    </div>
  )
}
