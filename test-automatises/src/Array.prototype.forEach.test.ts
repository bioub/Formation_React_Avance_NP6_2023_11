import { expect, test, vi } from 'vitest';

test('Array.prototype.forEach function', () => {
  const spyCallback = vi.fn();

  ['A', 'B', 'C'].forEach(spyCallback);

  expect(spyCallback).toHaveBeenCalledTimes(3);
  expect(spyCallback).toHaveBeenNthCalledWith(1, 'A', 0, ['A', 'B', 'C']);
});