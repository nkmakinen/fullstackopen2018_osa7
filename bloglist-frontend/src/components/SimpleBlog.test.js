import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.skip('<SimpleBlog />', () => {
    it('renders content', () => {
        const blog = {
            author: 'some author',
            title: 'some title',
            url: 'my url',
            likes: 14,
            comments: []
        }

        const simpleBlogComponent = shallow(<SimpleBlog blog={blog} />)
        const contentDiv = simpleBlogComponent.find('.content')
        const likesDiv = simpleBlogComponent.find('.likes')

        expect(contentDiv.text()).toContain(blog.title)
        expect(contentDiv.text()).toContain(blog.author)
        expect(likesDiv.text()).toContain(blog.likes)
    })
})