import { test, describe, expect, it } from 'vitest';
import { hello } from './hello';

test('hello function returns Hello followed by param', () => {
  expect(hello('Romain')).toBe('Hello Romain');
});

test('hello function returns Hello followed by param (Given/When/Then, Arrange/Act/Assert)', () => {
  // Given / Arrange
  const param = 'Romain';

  // When / Act
  const result = hello(param);

  // Then / Assert
  expect(result).toBe('Hello Romain');
});


describe('hello function', () => {
  it('should return Hello followed by param', () => {
    expect(hello('Romain')).toBe('Hello Romain');
  });
});


test('difference toBe vs toEqual', () => {
  expect('ABC').toBe('ABC'); // ===
  expect(['ABC']).toEqual(['ABC']); // deepEqual

  // const state = {};
  // const action = { type: 'INCREMENT' };
  // expect(reducer(state, action)).not.toBe(state);
});