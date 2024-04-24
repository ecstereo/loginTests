const {test, expect} = require('@playwright/test')

test('Log in and log out - positive test', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/login')

    const username = 'tomsmith'
    const password = 'SuperSecretPassword!'

    // Verify the default state of the username field
    const usernameField = await page.locator('#username')    
    await expect(usernameField).toBeVisible()
    await expect(usernameField).toBeEmpty()
    await expect(usernameField).toBeEnabled()

    // Verify the default state of the password field
    const passwordField = await page.locator('#password')
    await expect(passwordField).toBeVisible()
    await expect(passwordField).toBeEmpty()
    await expect(passwordField).toBeEnabled()

    // Log in
    await usernameField.fill(username)
    await passwordField.fill(password)
    await page.locator("//*[@id='login']/button").click()

    // Verify login success
    await expect(
        await page.locator("//div[@id='flash' and @class='flash success']"))
        .toContainText('You logged into a secure area!')

    // Log out
    await page.locator('.button.secondary.radius').click()

    // Verify logout success
    await expect(usernameField).toBeVisible()
    await expect(passwordField).toBeVisible()

    await page.close()
})