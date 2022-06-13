import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("Should be visable to the user", () => {
  render(<Button />);
  const ButtonElement = screen.getByText(/Search/i);
  expect(ButtonElement).toBeVisible();
});
