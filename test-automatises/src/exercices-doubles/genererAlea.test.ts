import { afterEach, expect, test, vi } from "vitest";
import { genererAlea } from "./genererAlea";

test('genererAlea function 50', () => {
  vi.spyOn(Math, 'random').mockReturnValue(0.5);
  expect(genererAlea(0, 100)).toBe(50);
});

test('genererAlea function 0', () => {
  vi.spyOn(Math, 'random').mockReturnValue(0);
  expect(genererAlea(0, 100)).toBe(0);
});

test('genererAlea function 100', () => {
  vi.spyOn(Math, 'random').mockReturnValue(0.999999);
  expect(genererAlea(0, 100)).toBe(100);
});

afterEach(() => {
  vi.restoreAllMocks();
});
