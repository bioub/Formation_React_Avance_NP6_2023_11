import test, { expect } from "@playwright/test";
import { } from '@playwright/test'

test('login page works', async ({ page }) => {
  await page.goto('/pokemons');
  expect(page.url()).toBe('/pokemons');
});