import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NavBar from "./NavBar";

test("renders NavBar elements", () => {
  render(<NavBar />);

  // Test 'My Recipe' link
  const myRecipeLink = screen.getByTestId("my-recipe");
  expect(myRecipeLink).toHaveTextContent("My Recipe");
  expect(myRecipeLink).toHaveAttribute("href", "/my-recipe");

  // Test search form
  const searchForm = screen.getByTestId("form-search");
  expect(searchForm).toBeInTheDocument();
});
