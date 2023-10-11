import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setMessage(state, action) {
      return action.payload
    },
    removeMessage(state, action) {
      return null
    }
  }
})

export const setNotification = (message, secs) => {
  return dispatch => {
    dispatch(setMessage(message))
    setTimeout(() => dispatch(removeMessage()), secs * 1000)
  }
}

export const { setMessage, removeMessage } = notificationSlice.actions
export default notificationSlice.reducer