import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import UserForm from "./UserForm";
import userEvent from "@testing-library/user-event";

test('UserForm type', async () => {
  render(<UserForm />);

  await userEvent.type(screen.getByPlaceholderText('Username'), 'Toto', {initialSelectionStart: 0, initialSelectionEnd: 6});

  expect(screen.queryByText('Hello Toto')).toBeInTheDocument();
});