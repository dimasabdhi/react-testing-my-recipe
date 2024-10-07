import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "./Footer";

test("renders footer text and social media links", () => {
  render(<Footer />);

  // Test footer text
  const footerText = screen.getByTestId("footer-text");
  expect(footerText).toHaveTextContent("Your footer text here");

  // Test social media links
  const facebookLink = screen.getByTestId("link-facebook");
  expect(facebookLink).toHaveAttribute(
    "href",
    "https://facebook.com/yourprofile"
  );

  const xLink = screen.getByTestId("link-x");
  expect(xLink).toHaveAttribute("href", "https://x.com/yourprofile");

  const instagramLink = screen.getByTestId("link-instagram");
  expect(instagramLink).toHaveAttribute(
    "href",
    "https://instagram.com/yourprofile"
  );
});
