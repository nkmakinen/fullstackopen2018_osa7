const puppeteer = require('puppeteer')

const main = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 250
    })

    global.__BROWSER__ = browser

    const page = await browser.newPage()

    await page.goto('http://localhost:3000')
    await page.type('input', 'Headless Chrome')
    await page.screenshot({ path: 'kuva.png' })
    await browser.close()
}

main()