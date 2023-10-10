import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoreReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => 
    state.filter !== ''
      ? state.anecdotes.filter( a => a.content.toLowerCase().includes(state.filter))
      : state.anecdotes
  )
  const dispatch = useDispatch()

  const vote = (id) => dispatch(voteAnecdote(id))

  return(
    <>
      { [...anecdotes]
        .sort((a, b) => b.votes - a.votes)
        .map( anecdote =>
          <div key={anecdote.id} style={{marginBottom: 10}}>
            <div>{ anecdote.content }</div>
            <div>
              has { anecdote.votes }
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default AnecdoteList