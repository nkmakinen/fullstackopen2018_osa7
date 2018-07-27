import React from 'react'
import { shallow } from 'enzyme'
import { Comments } from './Comments'

describe.skip('<Comments />', () => {
    it('renders content', () => {
        const blog = {
            author: 'some author',
            title: 'some title',
            url: 'my url',
            likes: 14,
            comments: ['nice!']
        }

        const commentsComponent = shallow(<Comments blog={blog} />)
        const contentDiv = commentsComponent.find('.comments')

        expect(contentDiv.text()).toContain('nice!')
    })
})