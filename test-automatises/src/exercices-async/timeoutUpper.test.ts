import { expect, test, vi } from "vitest";
import { timeoutUpper } from "./timeoutUpper";

test('timeoutUpper function', () => new Promise<void>((done) => {
  timeoutUpper('abc', (val) => {
    expect(val).toBe('ABC');
    done();
  });
}))

test('timeoutUpper function', () =>  {
  vi.useFakeTimers();
  const spy = vi.fn();

  timeoutUpper('abc', spy);
  vi.advanceTimersByTime(1000);

  expect(spy).toHaveBeenCalledWith('ABC');

  vi.useRealTimers();
})