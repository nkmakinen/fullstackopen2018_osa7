import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
    it('renders content including title, author and likes', () => {
        const simpleBlog = {
            title: 'some title',
            author: 'some author',
            likes: 14
        }

        const simpleBlogComponent = shallow(
            <SimpleBlog
                blog={simpleBlog}
            />
        )

        const contentDiv = simpleBlogComponent.find('.content')
        const likesDiv = simpleBlogComponent.find('.likes')

        expect(contentDiv.text()).toContain(simpleBlog.title)
        expect(likesDiv.text()).toContain(simpleBlog.likes)
    })

    it('if like button is pressed twice the event handler is called twice', () => {
        const simpleBlog = {
            title: 'my title',
            author: 'your author',
            likes: 0
        }

        const mockHandler = jest.fn()

        const simpleBlogComponent = shallow(
            <SimpleBlog
                blog={simpleBlog}
                onClick={mockHandler}
            />
        )

        const button = simpleBlogComponent.find('button')
        button.simulate('click')
        button.simulate('click')

        expect(mockHandler.mock.calls.length).toBe(2)
    })
})