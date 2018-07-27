import React from 'react'
import blogService from '../services/blogs'
import { connect } from 'react-redux'
import actionFor from '../actionCreator'
import { FormGroup, FormControl, Button } from 'react-bootstrap'

class Comments extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            blog: props.blog,
            newComment: ''
        }
    }

    generateKey = () => Number((Math.random() * 1000000).toFixed(0))

    handleChange = (event) => {
        this.setState({ newComment: event.target.value })
    }

    sendComment = (event) => {
        event.preventDefault()

        console.log('here!')

        const comment = this.state.newComment
        if (comment.length === 0) {
            return
        }
        
        this.props.dispatch(
            actionFor.showNotification(`comment "${comment}" added to blog "${this.state.blog.title}"`)
        )

        setTimeout(() => { // hide notification
            this.props.dispatch(
                actionFor.showNotification('')
            )
        }, 5000)

        let updatedBlog = {
            id: this.state.blog.id,
            author: this.state.blog.author,
            title: this.state.blog.title,
            url: this.state.blog.url,
            comments: this.state.blog.comments.concat(comment),
            likes: this.state.blog.likes + 1,
            user: this.state.blog.user
        }

        let commentObj = {
            comment: comment
        }

        blogService
            .sendComment(updatedBlog.id, commentObj)
            .then(() => {
                this.setState({
                    blog: updatedBlog,
                    newComment: ''
                })
            })
    }

    render() {
        return (
            <div>
                <div className="comments">
                    <h2>Comments</h2>
                    <ul>
                        {this.state.blog.comments.map((comment) => {
                            return <li key={this.generateKey()}>{comment}</li>
                        })}
                    </ul>
                </div>
                <form onSubmit={this.sendComment}>
                    <FormGroup>
                        <FormControl
                            type="text"
                            value={this.state.newComment}
                            onChange={this.handleChange}
                            name="comment" />
                    </FormGroup>
                    <Button type="submit">Add comment</Button>
                </form>
            </div>
        )
    }
}


export default connect()(Comments)