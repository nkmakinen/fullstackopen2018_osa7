import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'

describe('<App />', () => {
    let app

    describe('when user is not logged in', () => {
        beforeAll(() => {
            app = mount(<App />)
        })

        it('only login is shown if the user is not logged in', () => {
            app.update()
    
            const blogComponents = app.find(Blog)
            expect(blogComponents.length).toEqual(0)
        })
    })

    describe('when user is logged in', () => {
        beforeEach(() => {
            const user = {
                username: 'niko',
                token: 'not needed because we should not connect to backend',
                name: 'Niko Mäkinen'
            }
            
            localStorage.setItem('loggedUser', JSON.stringify(user))
            app = mount(<App />)
        })
        
        it('renders blogs if the user is logged in', () => {
            app.update()
    
            const blogComponents = app.find(Blog)
            expect(blogComponents.length).toEqual(blogService.blogs.length)
        })
    })
})