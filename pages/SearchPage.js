class SearchPage {
    constructor(page) {
        this.page = page;
        // Recommended Playwright user-facing locator
        this.searchInput = page.getByRole('searchbox', { name: 'Search Wikipedia' });
        this.searchButton = page.getByRole('button', { name: 'Search' });
    }

    async navigate() {
        await this.page.goto('https://en.wikipedia.org/wiki/Main_Page');
    }

    async search(query) {
        await this.searchInput.fill(query);
        await this.searchButton.click();
    }
}

module.exports = { SearchPage };