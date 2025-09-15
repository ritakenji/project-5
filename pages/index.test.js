import { render, screen } from "@testing-library/react";
import HomePage from "./index";

const mockArtPieces = [
  {
    slug: "test-slug",
    name: "Test Painting",
    artist: "Test Artist",
    imageSource: "/test.jpg",
  },
];

test("renders main title", () => {
  render(
    <HomePage
      artPieces={mockArtPieces}
      handleToggleFavorite={() => {}}
      isFavorite={() => false}
    />
  );
  expect(
    screen.getByRole("heading", { name: /art gallery/i })
  ).toBeInTheDocument();
});

test("renders artist name", () => {
  render(
    <HomePage
      artPieces={mockArtPieces}
      handleToggleFavorite={() => {}}
      isFavorite={() => false}
    />
  );
  expect(screen.getByText("Test Artist")).toBeInTheDocument();
});

test("renders favorite button", () => {
  render(
    <HomePage
      artPieces={mockArtPieces}
      handleToggleFavorite={() => {}}
      isFavorite={() => false}
    />
  );
  expect(screen.getByRole("button", { name: /favorite/i })).toBeInTheDocument();
});
