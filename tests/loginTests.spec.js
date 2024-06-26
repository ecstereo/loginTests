const {test, expect} = require('@playwright/test')

test('Log in with valid credentials and log out', async ({page}) =>{
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

test('Log in with invalid username', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/login')

    const badUsername = 'timsmith'
    const password = 'SuperSecretPassword!'

    // Verify the presence of the username field
    const usernameField = await page.locator('#username')    
    await expect(usernameField).toBeVisible()

    // Verify the presence of the password field
    const passwordField = await page.locator('#password')
    await expect(passwordField).toBeVisible()

    // Attempt bad log in
    await usernameField.fill(badUsername)
    await passwordField.fill(password)
    await page.locator("//*[@id='login']/button").click()

    // Verify login failure
    await expect(
        await page.locator("//div[@id='flash' and @class='flash error']"))
        .toContainText('Your username is invalid!')
    
    await page.close()
})

test('Log in with invalid password', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/login')

    const username = 'tomsmith'
    const badPassword = 'SuperSecretPasswurrrd'

    // Verify the presence of the username field
    const usernameField = await page.locator('#username')    
    await expect(usernameField).toBeVisible()

    // Verify the presence of the password field
    const passwordField = await page.locator('#password')
    await expect(passwordField).toBeVisible()

    // Attempt bad log in
    await usernameField.fill(username)
    await passwordField.fill(badPassword)
    await page.locator("//*[@id='login']/button").click()

    // Verify login failure
    await expect(
        await page.locator("//div[@id='flash' and @class='flash error']"))
        .toContainText('Your password is invalid!')

    await page.close()
})

test('Log in with invalid username and password', async ({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/login')

    const badUsername = 'timsmith'
    const badPassword = 'SuperSecretPasswurrrd'

    // Verify the presence of the username field
    const usernameField = await page.locator('#username')    
    await expect(usernameField).toBeVisible()

    // Verify the presence of the password field
    const passwordField = await page.locator('#password')
    await expect(passwordField).toBeVisible()

    // Attempt bad log in
    await usernameField.fill(badUsername)
    await passwordField.fill(badPassword)
    await page.locator("//*[@id='login']/button").click()

    // Verify login failure
    await expect(
        await page.locator("//div[@id='flash' and @class='flash error']"))
        .toContainText('Your username is invalid!')

    await page.close()
})