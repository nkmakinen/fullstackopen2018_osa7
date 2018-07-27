import React from 'react'
import { connect } from 'react-redux'
import { createBlog } from '../reducers/blogsReducer'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

const NewBlog = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()

        const newBlog = {
            title: e.target.title.value,
            author: e.target.author.value,
            url: e.target.url.value
        }


        props.createBlog(newBlog)
        // TODO: notify

        e.target.title.value = ''
        e.target.author.value = ''
        e.target.url.value = ''
    }
    
    return (
        <form className="create-new-form" onSubmit={handleSubmit}>
            <h2>Create new</h2>

            <FormGroup>
                <ControlLabel>Title</ControlLabel>
                <FormControl
                    type="text"
                    name="title">
                </FormControl>
            </FormGroup>

            <FormGroup>
                <ControlLabel>Author</ControlLabel>
                <FormControl
                    type="text"
                    name="author">
                </FormControl>
            </FormGroup>

            <FormGroup>
                <ControlLabel>URL</ControlLabel>
                <FormControl
                    type="text"
                    name="url">
                </FormControl>
            </FormGroup>

            <FormGroup>
                <Button type="submit" bsStyle="primary">create</Button>
            </FormGroup>
        </form>
    )
}

export default connect(
    null,
    { createBlog }
)(NewBlog)