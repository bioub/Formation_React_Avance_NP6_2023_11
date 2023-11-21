import { createRoot } from 'react-dom/client';
import { act } from 'react-test-renderer';
import { expect, test } from 'vitest';
import Counter from './Counter';
import { render, screen, fireEvent } from '@testing-library/react';

// test('Counter component', () => {
//   const rootEl = document.createElement('div');

//   act(() => {
//     createRoot(rootEl).render(<Counter />);
//   });

//   const buttonEl = rootEl.querySelector('.Counter');

//   act(() => {
//     buttonEl.dispatchEvent(new MouseEvent('click', { bubbles: true }));
//   });

//   expect(buttonEl.innerText).toContain('1');
// });

test('Counter component renders', () => {
  render(<Counter />)
});

test('Counter component increment button on click', () => {
  render(<Counter />);

  const button = screen.getByRole('button');
  fireEvent.click(button);
  
  expect(button).toHaveTextContent('1');
});