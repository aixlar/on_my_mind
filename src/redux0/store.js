//REDUX-ZERO
import createStore from 'redux-zero'

const initialState = { messages: [], newPost = {} }
const store = createStore(initialState)

export default store
