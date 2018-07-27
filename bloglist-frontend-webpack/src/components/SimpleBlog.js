import React from 'react'
import blogService from '../services/blogs'
import Comments from './Comments'
import { Button } from 'react-bootstrap'

// TODO: show blog info when the page is refreshed

class SimpleBlog extends React.Component {
    constructor(props) {
        super(props)

        let blog = props.blog
        if (blog === undefined) {
            blog = {
                url: '',
                author: '',
                title: '',
                likes: 0,
                comments: []
            }
        }

        this.state = {
            blog: blog,
            id: props.id
        }
    }

    addLike = () => {
        let updatedBlog = {
            id: this.state.blog.id,
            author: this.state.blog.author,
            title: this.state.blog.title,
            url: this.state.blog.url,
            likes: this.state.blog.likes + 1,
            user: this.state.blog.user
        }

        blogService
            .update(updatedBlog)
            .then(() => {
                this.setState({ blog: updatedBlog })
            })
    }

    render() {
        return (
            <div>
                <div>
                    <a href={this.state.blog.url}>{this.state.blog.url}</a>
                </div>
                <div className="content">
                    {this.state.blog.title} {this.state.blog.author}
                </div>
                <div className="likes">
                    {this.state.blog.likes} likes
                    <Button onClick={this.addLike}>like</Button>
                </div>
                <Comments blog={this.state.blog} />
            </div>
        )
    }
}

export default SimpleBlog