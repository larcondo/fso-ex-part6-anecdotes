import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, removeMessage } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const clearMsg = () => dispatch(removeMessage())

  const add = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(addAnecdote(content))
    event.target.anecdote.value = ''
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