const { test, expect } = require('@playwright/test');
const { SearchPage } = require('./SearchPage');

test('User can search for a product smoothly', async ({ page }) => {
    // Initialize our page object
    const searchPage = new SearchPage(page);

    // Run our actions cleanly
    await searchPage.navigate();
    await searchPage.searchForProduct('Wireless Mouse');

    // Make our clean assertion
    await expect(searchPage.resultsText).toBeVisible();
});