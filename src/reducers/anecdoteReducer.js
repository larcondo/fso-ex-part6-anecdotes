import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      return state.map( a => a.id === id
        ? { ...a, votes: a.votes + 1 }
        : a )
    },
    addAnecdote(state, action) {
      return [...state, action.payload]
    },
    setAnecdotes(state, action) {
      return action.payload
    },
  }
})

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newNote = await anecdoteService.createNew(content)
    dispatch(addAnecdote(newNote))
  }
}

export const {
  voteAnecdote,
  addAnecdote,
  setAnecdotes
} = anecdoteSlice.actions
export default anecdoteSlice.reducer