import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

class Togglable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible })
    }

    render() {
        const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
        const showWhenVisible = { display: this.state.visible ? '' : 'none' }

        return (
            <div className="togglable-container">
                <div className="centered" style={hideWhenVisible}>
                    <Button onClick={this.toggleVisibility}>{this.props.buttonLabel}</Button>
                </div>
                <div style={showWhenVisible}>
                    {this.props.children}
                    <Button onClick={this.toggleVisibility}>cancel</Button>
                </div>
            </div>
        )
    }
}

Togglable.propTypes = {
    toggleVisibility: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired
}

export default Togglable