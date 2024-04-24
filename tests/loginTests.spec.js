const {test, expect} = require('@playwright/test')

test('Login Positive test', async ({page}) =>{
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

    await usernameField.fill(username)
    await passwordField.fill(password)
    await page.locator("//*[@id='login']/button").click()

    // Add verification for logout button after login

    // Take out after debugging
    await page.waitForTimeout(2000)

    await page.close()
})