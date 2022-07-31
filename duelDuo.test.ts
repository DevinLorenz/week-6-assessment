
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('the draw button displays the button with id="choices"', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    const displayed = await drawButton.isDisplayed()
    expect(displayed).toBe(true)
})

test('when a bot is "Removed from duo", the bot goes back to "choices"', async () => {
    const drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})