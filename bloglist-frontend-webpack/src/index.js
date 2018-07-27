import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'
import usersReducer from './reducers/usersReducer'
import blogsReducer from './reducers/blogsReducer'
import loggedUserReducer from './reducers/loggedUserReducer'

const reducer = combineReducers({
    notification: notificationReducer,
    users: usersReducer,
    blogs: blogsReducer,
    loggedUser: loggedUserReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)