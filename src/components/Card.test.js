import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

const el = {
  image: "https://via.placeholder.com/150",
  name: "Test Recipe",
  rating: 4.5,
  tags: ["Tag1", "Tag2", "Tag3"],
  id: 1,
};

test("renders the component Card & given props", () => {
  render(<Card el={el} />);

  // Test image src and alt
  const img = screen.getByTestId(`img-recipe-${el.id}`);
  expect(img).toHaveAttribute("src", el.image);
  expect(img).toHaveAttribute("alt", el.name);

  // Test title text
  const title = screen.getByTestId(`title-recipe-${el.id}`);
  expect(title).toHaveTextContent(el.name);

  // Test rating text
  const rating = screen.getByTestId(`rating-recipe-${el.id}`);
  expect(rating).toHaveTextContent(el.rating);

  // Test link href
  const link = screen.getByTestId(`link-recipe-${el.id}`);
  expect(link).toHaveAttribute(
    "href",
    `https://dummyjson.com/recipes/${el.id}`
  );

  // Test tags
  const tag1 = screen.getByTestId(`tag-recipe-${el.tags[0]}`);
  const tag2 = screen.getByTestId(`tag-recipe-${el.tags[1]}`);
  expect(tag1).toHaveTextContent(el.tags[0]);
  expect(tag2).toHaveTextContent(el.tags[1]);
});
