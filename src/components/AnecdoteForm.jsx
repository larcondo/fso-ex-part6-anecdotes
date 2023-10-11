import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, removeMessage } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const clearMsg = () => dispatch(removeMessage())

  const add = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(setMessage(`'${content}' added`))
    setTimeout(clearMsg, 5000)
  }

  return(
    <>
      <h2>Create new</h2>

      <form onSubmit={add}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </>
  )
}

export default AnecdoteForm