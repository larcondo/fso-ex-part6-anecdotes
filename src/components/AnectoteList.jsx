import { useSelector, useDispatch } from 'react-redux'
import { updateAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state =>
    state.filter !== ''
      ? state.anecdotes.filter( a => a.content.toLowerCase().includes(state.filter))
      : state.anecdotes
  )
  const dispatch = useDispatch()

  const vote = (anecdote) => {
    dispatch(updateAnecdote(anecdote))
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
  }

  return(
    <>
      { [...anecdotes]
        .sort((a, b) => b.votes - a.votes)
        .map( anecdote =>
          <div key={anecdote.id} style={{ marginBottom: 10 }}>
            <div>{ anecdote.content }</div>
            <div>
              has { anecdote.votes }
              <button onClick={() => vote(anecdote)}>vote</button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default AnecdoteList