// tests/api/postman-api.spec.js
const { test, expect } = require('@playwright/test');

test.describe('API Integration Tests', () => {
    const baseURL = 'https://jsonplaceholder.typicode.com';

    test('GET: Fetch post details successfully', async ({ request }) => {
        // 1. Send GET request
        const response = await request.get(`${baseURL}/posts/1`);

        // 2. Assert HTTP Status Code
        expect(response.status()).toBe(200);

        // 3. Parse and assert JSON response body
        const responseBody = await response.json();
        expect(responseBody.id).toBe(1);
        expect(responseBody).toHaveProperty('title');
    });

    test('POST: Create a new post resource', async ({ request }) => {
        // 1. Send POST request with JSON payload
        const response = await request.post(`${baseURL}/posts`, {
            data: {
                title: 'Automated Test Post',
                body: 'Testing API endpoints with Playwright',
                userId: 1
            }
        });

        // 2. Assert Created Status (201)
        expect(response.status()).toBe(201);

        // 3. Verify returned response body contains sent data
        const responseBody = await response.json();
        expect(responseBody.title).toBe('Automated Test Post');
    });

    test('PUT: Update an existing post resource', async ({ request }) => {
        // 1. Send PUT request to update resource ID 1
        const response = await request.put(`${baseURL}/posts/1`, {
            data: {
                id: 1,
                title: 'Updated Test Title',
                body: 'Updated body content via Playwright API context',
                userId: 1
            }
        });

        // 2. Assert Success Status (200)
        expect(response.status()).toBe(200);

        // 3. Verify update reflected in response
        const responseBody = await response.json();
        expect(responseBody.title).toBe('Updated Test Title');
    });
});