import React from 'react'
import { connect } from 'react-redux'

const Notification = (props) => {
    let style = {}

    if (props.notification.length === 0) {
        style.display = 'none'
    }

    return (
        <div className="notification" style={style}>
            {props.notification}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        notification: state.notification
    }
}

export default connect(
    mapStateToProps
)(Notification)