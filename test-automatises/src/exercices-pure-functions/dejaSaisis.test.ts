import { expect, test } from 'vitest';
import { dejaSaisis } from './dejaSaisis';

test('dejaSaisis function return undefined when no value in array', () => {
  expect(dejaSaisis([])).toBeUndefined();
})

test('dejaSaisis function return undefined when no value in array', () => {
  expect(dejaSaisis([50, 12, 35])).toBe('Vous avez déjà saisi : 50 | 12 | 35');
})