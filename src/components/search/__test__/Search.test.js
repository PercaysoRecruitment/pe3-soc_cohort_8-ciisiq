import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";

test("Should have an input with that placeholder", () => {
  render(<Search />);
  const inputElement = screen.getByPlaceholderText(
    "Enter a keyword e.g.: Google"
  );
  expect(inputElement).toBeInTheDocument();
});

test("Should check if only have one input on the screen", () => {
  render(<Search />);
  const inputElement = screen.getAllByTestId("input");
  expect(inputElement.length).toBe(1);
});

it('Should not have a query with name "panda" on the document', () => {
  render(<Search />);
  const inputElement = screen.queryByText(/panda/i);
  expect(inputElement).not.toBeInTheDocument();
});

test("Should be visable to the user", () => {
  render(<Search />);
  const inputElement = screen.getByTestId("input");
  expect(inputElement).toBeVisible();
});

test("Should change when type something", () => {
  render(<Search />);
  const inputElement = screen.getByTestId("input");
  fireEvent.change(inputElement, { target: { value: "Panda" } });
  expect(inputElement.value).toBe("Panda");
});
