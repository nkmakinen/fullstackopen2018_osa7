import React from 'react'
import blogService from '../services/blogs'
import { Link } from 'react-router-dom'

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            blog: props.blog
        }
    }

    toggleVisibility = () => {
        this.setState({ visible: !this.state.visible })
    }

    addLike = () => {
        let updatedBlog = {
            id: this.state.blog.id,
            author: this.state.blog.author,
            title: this.state.blog.title,
            likes: this.state.blog.likes + 1,
            user: this.state.blog.user
        }

        blogService
            .update(updatedBlog)
            .then(() => {
                this.setState({ blog: updatedBlog })
            })
    }

    deleteBlog = () => {
        if (window.confirm('delete "' + this.state.blog.title + '" by ' + this.state.blog.author)) {
            let user = JSON.parse(window.localStorage.getItem('loggedUser'))

            blogService
                .setToken(user.token)
            blogService
                .remove(this.state.blog)
                .then(() => {
                    console.log('deleted!')
                })
        }
    }

    render() {
        const showWhenVisible = { display: this.state.visible ? '' : 'none' }

        return (
            <div>
                <div className="blog-container">
                    <Link to={`/blogs/${this.state.blog.id}`}>
                        <p className="blog-visible">{this.state.blog.title} {this.state.blog.author}</p>
                    </Link>

                    <div className="content" style={showWhenVisible}>
                        <p>{this.state.blog.url}</p>
                        <p>{this.state.blog.likes} likes <button onClick={this.addLike}>like</button></p>
                        <p>added by {this.state.blog.user === null ? ' N/A' : this.state.blog.user.name}</p>
                        <button onClick={this.deleteBlog}>delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Blog