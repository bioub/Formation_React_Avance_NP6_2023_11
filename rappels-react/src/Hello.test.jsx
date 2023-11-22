import { expect, test } from 'vitest';
// import { createRoot } from 'react-dom/client';
import { renderIntoDocument } from 'react-dom/test-utils';
// import { act, create } from 'react-test-renderer';
import { render, screen } from '@testing-library/react'
import Hello from './Hello';


// test('Hello component', () => {
//   const rootEl = document.createElement('div');
//   createRoot(rootEl).render(<Hello />);
// });

// test('Hello component', () => {
//   renderIntoDocument(<Hello />);
// });

// test('Hello component', () => {
//   const rootEl = document.createElement('div');
//   act(() => {
//     createRoot(rootEl).render(<Hello />);
//   });
//   expect(rootEl.innerText).toContain('Hello, world!');
// });

// test('Hello component snapshot testing', () => {
//   expect(create(<Hello />).toJSON()).toMatchSnapshot();
// });

test('Hello component renders', () => {
  render(<Hello />);
});

test('Hello component renders Hello, world!', () => {
  render(<Hello />);
  expect(screen.queryByText('Hello, world!')).toBeInTheDocument();
});
