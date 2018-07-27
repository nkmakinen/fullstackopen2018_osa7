import blogService from '../services/blogs'
import loginService from '../services/login'

const loggedUserReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.data
        default:
            return state
    }
}

export const loginUser = (username, password) => {
    return async (dispatch) => {
        let user = null

        if (username !== undefined && password !== undefined) {
            user = await loginService.login({ username, password })
            window.localStorage.setItem('loggedUser', JSON.stringify(user))
            blogService.setToken(user.token)
        }

        dispatch({
            type: 'LOGIN',
            data: user
        })
    }
}

export const loadLastLogin = () => {
   return (dispatch) => {
        let user = null

        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            user = JSON.parse(loggedUserJSON)
            blogService.setToken(user.token)
        }

        dispatch({
            type: 'LOGIN',
            data: user
        })
    }
}

export default loggedUserReducer