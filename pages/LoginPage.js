class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator('#username');
        this.passwordField = page.locator('#password');
        this.submitButton = page.locator('button[type="submit"]');
    }

    async navigate() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.submitButton.click();
    }
}

module.exports = { LoginPage };