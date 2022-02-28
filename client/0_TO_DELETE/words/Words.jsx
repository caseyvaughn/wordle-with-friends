import {Link} from 'react-router-dom'

export default function Words(props) {
  return (
    <div>
      { props.currentUser &&
        <Link to='/words/create'>Create a new word!</Link>
      }
      {
      props.words.map(word => (
        <Link key={word.id} to={`/words/${word.id}`}>
          <img src={word.image_url} />
          <h4>{word.title}</h4>
        </Link>
      ))
      }
    </div>
  )
}
