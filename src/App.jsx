import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote, addAnecdote } from './reducers/anecdoreReducer'

const App = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => dispatch(voteAnecdote(id))

  const add = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(addAnecdote(content))
    event.target.anecdote.value = ''
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      
      { anecdotes
          .sort((a, b) => b.votes - a.votes)
          .map( anecdote => 
            <div key={anecdote.id}>
              <div>{ anecdote.content }</div>
              <div>
                has { anecdote.votes }
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )
      }

      <h2>Create new</h2>

      <form onSubmit={add}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App