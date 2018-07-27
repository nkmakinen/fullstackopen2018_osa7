import React from 'react';
import App from './App';
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import puppeteer from 'puppeteer'

const middlewares = []
const mockStore = configureStore(middlewares)

it('renders without crashing', () => {
    const initialState = {}
    const store = mockStore(initialState)

    const wrapper = shallow(<Provider store={store}><App /></Provider>)
})

describe('headless testing', () => {
    let page

    beforeEach(async () => {
        const browser = await puppeteer.launch({
            headless: false,
            slowMo: 250
        })
    
        global.__BROWSER__ = browser
    
        page = await global.__BROWSER__.newPage()
        await page.goto('http://localhost:3000')
    })

    it('renders the login page', async () => {
        await page.waitForSelector('.main-content')

        const textContent = await page.$eval('body', el => el.textContent)
        expect(textContent.includes('Blog App')).toBe(true)
    })
})