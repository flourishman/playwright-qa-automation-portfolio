const { test, expect } = require('@playwright/test');
const { SearchPage } = require('../../pages/SearchPage');

test('User can search for a product smoothly', async ({ page }) => {
    const searchPage = new SearchPage(page);

    // 1. Navigate to search page
    await searchPage.navigate();

    // 2. Perform search
    await searchPage.search('Playwright');

    // 3. Assert search results page title
    await expect(page).toHaveTitle(/Playwright - Wikipedia/i);
});