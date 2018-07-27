const actionFor = {
    showNotification(message) {
        return {
            type: 'SHOW_NOTIFICATION',
            notification: message
        }

    }
}

export default actionFor