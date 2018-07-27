import React from 'react'

const UserInfo = ({ user }) => {
    if (user === undefined) {
        user = {
            blogs: []
        }
    }

    return (
        <div>
            <h2>{user.name}</h2>
            <h3>Added blogs</h3>
            <ul>
                {user.blogs.map((blog) => {
                    return <li key={blog._id}>{blog.title} by {blog.author}</li>
                })}
            </ul>
        </div>
    )
}

export default UserInfo