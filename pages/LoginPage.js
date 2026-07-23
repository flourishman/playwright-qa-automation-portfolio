// pages/LoginPage.js
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.getByPlaceholder('Enter Username');
        this.passwordField = page.getByPlaceholder('Enter Password');
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async navigate() {
        await this.page.goto('https://example.com/login'); // replace with your app login URL
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }
}

module.exports = { LoginPage };