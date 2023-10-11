import { createSlice } from '@reduxjs/toolkit'

const getId = () => (100000 * Math.random()).toFixed(0)

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
      const newAnecdote = {
        content: action.payload,
        id: getId(),
        votes: 0
      }
      return [...state, newAnecdote]
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