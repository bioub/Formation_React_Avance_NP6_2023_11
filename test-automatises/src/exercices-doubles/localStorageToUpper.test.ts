import { expect, test } from "vitest";
import { localStorageToUpper } from "./localStorageToUpper";

// globalThis.localStorage = {
//   getItem(key: string) {
//     return 'abc';
//   }
// } as any;

test('localStorageToUpper function', () => {
  localStorage.setItem('ABC', 'xyz');
  expect(localStorageToUpper('ABC')).toBe('XYZ');
})