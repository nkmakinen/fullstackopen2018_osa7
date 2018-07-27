import React from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../reducers/loggedUserReducer'
import { FormControl, ControlLabel, Button, FormGroup } from 'react-bootstrap'

const LoginForm = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        let username = e.target.username.value
        let password = e.target.password.value

        props.loginUser(username, password)
        // TODO: notify

        e.target.username.value = ''
        e.target.password.value = ''
    }

    return (
        <div>
            <h2>Kirjaudu</h2>

            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <ControlLabel>Käyttäjätunnus</ControlLabel>
                    <FormControl
                        type="text"
                        name="username">
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <ControlLabel>Salasana</ControlLabel>
                    <FormControl
                        type="text"
                        name="password">
                    </FormControl>
                </FormGroup>
                <FormGroup>
                    <Button bsStyle="primary" type="submit">Kirjaudu</Button>
                </FormGroup>
            </form>
        </div>
    )
}

export default connect(
    null,
    { loginUser }
)(LoginForm)