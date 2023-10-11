import { createSlice } from '@reduxjs/toolkit'

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

export const {
  voteAnecdote,
  addAnecdote,
  setAnecdotes
} = anecdoteSlice.actions
export default anecdoteSlice.reducer