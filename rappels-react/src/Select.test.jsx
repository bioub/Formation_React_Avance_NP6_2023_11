import { act, fireEvent, render, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import Select from './Select';
import { createRef } from "react";

test('Select renders', () => {
  render(<Select value="ABC" items={['ABC', 'DEF']} onChange={() => {}} />)
});

test('Select renders value', () => {
  render(<Select value="ABC" items={['ABC', 'DEF']} onChange={() => {}} />);

  expect(screen.queryByText('ABC')).toBeInTheDocument();
  expect(screen.queryByText('DEF')).not.toBeInTheDocument();
});

test('Select opens menu', () => {
  render(<Select value="ABC" items={['ABC', 'DEF']} onChange={() => {}} />);

  fireEvent.click(screen.getByText('ABC'));

  expect(screen.queryByText('DEF')).toBeInTheDocument();
});

test('Select calls onChange', () => {
  const spy = vi.fn();
  render(<Select value="ABC" items={['ABC', 'DEF']} onChange={spy} />);

  fireEvent.click(screen.getByText('ABC')); // opens menu
  fireEvent.click(screen.getByText('DEF'));

  expect(spy).toHaveBeenCalledOnce();
  expect(spy).toHaveBeenCalledWith('DEF');
});

test('Select openMenu through ref opens the menu', () => {
  const ref = createRef();
  render(<Select value="ABC" items={['ABC', 'DEF']} onChange={() => {}} ref={ref} />);

  act(() => {
    ref.current.openMenu();
  });

  expect(screen.queryByText('DEF')).toBeInTheDocument();
});
