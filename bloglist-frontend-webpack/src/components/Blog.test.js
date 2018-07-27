import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe.skip('<Blog />', () => {
    it('after clicking name the details are displayed', () => {
        const blog = {
            name: 'my name',
            title: 'my title',
            author: 'my author',
            likes: 1,
            user: {
                name: 'my username'
            }
        }

        const blogComponent = shallow(
            <Blog blog={blog} />
        )

        const nameDiv = blogComponent.find('.blog-visible')
        nameDiv.simulate('click')
      
        const contentDiv = blogComponent.find('.content')
        expect(contentDiv.getElement().props.style).toEqual({ display: '' })
    })
})