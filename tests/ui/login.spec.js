// tests/ui/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test('User can successfully log in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Navigate to page
    await loginPage.navigate();

    // 2. Perform login action
    await loginPage.login('qa_user', 'SuperSecretPassword123');

    // 3. Assert successful navigation/element visible after login
    await expect(page.getByText('Welcome back')).toBeVisible();
});