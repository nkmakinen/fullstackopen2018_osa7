import React from 'react'
import User from './User'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'

class UserListing extends React.Component {
    render() {
        return (
            <div>
                <h1>Users</h1>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Blogs added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((user) => {
                            return (
                                <User key={user.id} user={user} />
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(
    mapStateToProps
)(UserListing)