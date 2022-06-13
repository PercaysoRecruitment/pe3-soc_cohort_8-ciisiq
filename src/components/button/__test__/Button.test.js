import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../Button";

test("Should be visable to the user", () => {
  render(<Button />);
  const ButtonElement = screen.getByText(/Search/i);
  expect(ButtonElement).toBeVisible();
});

test("Should be able to click", () => {
  render(<Button />);
  const ButtonElement = screen.getByText(/Search/i);
  fireEvent.click(ButtonElement);
  expect(ButtonElement).not.toBeDisabled();
  userEvent.click(ButtonElement);
});
