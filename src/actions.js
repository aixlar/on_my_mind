const arrSearch = (array, object) => {
  let flag = true
  for (let value of array) {
    if (value.id === object.id) {
      console.log('pair: ', value, object)
      flag = false
    }
  }
  return flag
}

const actions = store => ({
  addPost: (state, newPost) => {

    if (arrSearch(state.messages, newPost)) {
      state.messages.unshift(newPost)
      console.log('adding new post')
    } else {
      console.log('This post alredy in msgs!. This post = ', newPost)
    }
    console.log('new state = ', state.messages)
    return ({ messages: state.messages })
  }
})

export default actions
