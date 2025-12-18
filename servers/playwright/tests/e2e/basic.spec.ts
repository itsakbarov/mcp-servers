import { test, expect } from '@playwright/test';

test('basic e2e smoke: load homepage', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');
  const body = page.locator('body');
  await expect(body).toBeVisible();
});
