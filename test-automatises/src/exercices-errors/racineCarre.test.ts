import { expect, test } from "vitest";
import { racineCarre } from "./racineCarre";

test('racineCarre don\'t throw', () => {
  racineCarre(4);
});

test('racineCarre don\'t throw', () => {
  expect(() => racineCarre(4)).not.toThrow()
});

test('racineCarre throws', () => {
  expect(() => racineCarre(-1)).toThrow()
});

test('racineCarre return sqrt', () => {
  expect(racineCarre(4)).toBe(2)
});