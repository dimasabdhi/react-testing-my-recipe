import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders App component with NavBar, image banner, and Footer", async () => {
  render(<App />);

  // Test image banner is rendered with correct src and alt attributes
  const banner = screen.getByTestId("image-banner");
  expect(banner).toBeInTheDocument();
  expect(banner).toHaveAttribute(
    "src",
    "https://www.instacart.com/company/wp-content/uploads/2022/11/cooking-statistics-hero.jpg"
  );
  expect(banner).toHaveAttribute("alt", "banner");

  // Test NavBar is rendered (my-recipe link should be present)
  const navBar = screen.getByTestId("my-recipe");
  expect(navBar).toBeInTheDocument();

  // Test Footer is rendered (footer text should be present)
  const footerText = screen.getByTestId("footer-text");
  expect(footerText).toBeInTheDocument();
});
