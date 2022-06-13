import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

const MochHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

test('Should have a link with the name "home"', () => {
  render(<MochHeader />);
  const LinksElement = screen.getByText(/Home/i);
  expect(LinksElement).toBeInTheDocument();
});

test("Should have 3 links at the top", () => {
  render(<MochHeader />);
  const LinksElement = screen.getAllByRole("link");
  expect(LinksElement.length).toBe(3);
});
