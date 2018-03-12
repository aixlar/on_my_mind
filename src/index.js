//REACT
import React from 'react'
import ReactDOM from 'react-dom'
//REACT-ZERO
import { Provider } from 'redux-zero/react'
//STORE
import store from './store'
//ROUTER
import { BrowserRouter } from 'react-router-dom'
//APP
import App from './App'
//SERVICE WORKER
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
  (<Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>)
  , document.getElementById('root')
)

registerServiceWorker()
