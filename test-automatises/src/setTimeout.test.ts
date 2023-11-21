import { expect, test, vi } from "vitest";
// import { promisify } from "node:util";
// const setTimeoutPromise = promisify(setTimeout);

function setTimeoutPromise(delay, arg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(arg);
    }, delay);
  });
}

test('setTimeout function', () => {
  vi.useFakeTimers(); // monkey patch setTimeout

  const spy = vi.fn();

  setTimeout(spy, 1000);

  vi.advanceTimersByTime(1000);
  expect(spy).toHaveBeenCalled();

  vi.useRealTimers();
});

// PASS mais long
test('setTimeout function', async () => {
  const val = await setTimeoutPromise(1000, 'ABC');
  expect(val).toBe('ABC');
});


// PASS mais long
test('setTimeout function', async () => {
  vi.useFakeTimers(); 

  const promise = setTimeoutPromise(1000, 'ABC');
  vi.advanceTimersByTime(1000);
  const val = await promise;

  expect(val).toBe('ABC');

  vi.useRealTimers();
});