class SearchPage {
    constructor(page) {
        this.page = page;
        // We define our elements here in one clean place
        this.searchField = page.getByPlaceholder('Search products...');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.resultsText = page.getByText('10 items found');
    }

    async navigate() {
        await this.page.goto('https://mystore.com');
    }

    async searchForProduct(productName) {
        await this.searchField.fill(productName);
        await this.searchButton.click();
    }
}
module.exports = { SearchPage };