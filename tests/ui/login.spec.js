const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test('User can successfully log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Navigate to page
    await loginPage.navigate();

    // 2. Perform login action
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // 3. Assert successful login banner appears
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});