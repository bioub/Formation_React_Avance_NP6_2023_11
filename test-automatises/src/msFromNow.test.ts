import { afterEach, expect, test, vi } from "vitest";
import { msFromNow } from "./msFromNow";

test('msFromNow function', () => {
  vi.spyOn(Date, 'now').mockReturnValue(new Date(2023, 10, 21, 14, 5, 1, 0).getTime());
  expect(msFromNow(new Date(2023, 10, 21, 14, 5, 0, 0).getTime())).toBe(1000);
});

// test('msFromNow function', () => {
//   vi.setSystemTime(new Date(2023, 10, 21, 14, 5, 1, 0).getTime());
//   expect(msFromNow(new Date(2023, 10, 21, 14, 5, 0, 0).getTime())).toBe(1000);
// });

// test('msFromNow function', () => {
//   expect(msFromNow(new Date(2023, 10, 21, 14, 5, 0, 0).getTime())).toBe(1000);
// });

afterEach(() => {
  vi.restoreAllMocks()
});
