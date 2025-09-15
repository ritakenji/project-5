import { render, screen, fireEvent } from "@testing-library/react";
import List from "./List";

const mockArtPieces = [
  {
    slug: "test-slug",
    name: "Test Painting",
    artist: "Test Artist",
    imageSource: "/test.jpg",
  },
];

test("renders art pieces and favorite button", () => {
  const mockToggle = jest.fn();
  const isSlugFavorite = (slug) => slug === "test-slug"; // mock favorite

  render(
    <List
      artPieces={mockArtPieces}
      handleToggleFavorite={mockToggle}
      isSlugFavorite={isSlugFavorite}
    />
  );

  // Name and artist
  expect(screen.getByText(/Test Painting by Test Artist/i)).toBeInTheDocument();

  // favorite button
  const favButton = screen.getByRole("button", { name: /favorite/i });
  expect(favButton).toBeInTheDocument();

  // Click button
  fireEvent.click(favButton);
  expect(mockToggle).toHaveBeenCalledWith("test-slug");
});
