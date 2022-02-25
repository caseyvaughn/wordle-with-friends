import { Link } from 'react-router-dom'

export default function Words(props) {
  return (
    <div>
      <h2>Word List</h2>
      {/* { props.currentUser &&
        <Link to='/words/create'>Create A Word!!!</Link>
      } */}
      {
      props.words.map(word => (
        <Link key={word.id} to={`/words/${word.id}`}>
          <h4>{word.solution_word}</h4>
        </Link>
      ))
      }
    </div>
  )
}