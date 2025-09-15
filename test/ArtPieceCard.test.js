import { render, screen, fireEvent } from "@testing-library/react";
import ArtPieceCard from "@/Components/ArtPieceCard";

const mockArtPieces = [
  {
    slug: "test-slug",
    name: "Test Painting",
    artist: "Test Artist",
    imageSource: "/test.jpg",
  },
];

test("renders ArtPieceCard and toggles favorite", () => {
  const mockToggle = jest.fn();

  render(
    <ArtPieceCard
      artPiece={mockArtPieces[0]}
      handleToggleFavorite={mockToggle}
      isFavorite={false}
    >
      {mockArtPieces[0].artist}
    </ArtPieceCard>
  );

  // Check image
  expect(screen.getByAltText("Test Painting")).toBeInTheDocument(); 

  // Check artist text
  expect(screen.getByText("Test Artist")).toBeInTheDocument();

  // Check favorite button exists
  const btn = screen.getByRole("button", { name: /favorite/i });
  expect(btn).toBeInTheDocument();

  // Click button triggers handleToggleFavorite
  fireEvent.click(btn);
  expect(mockToggle).toHaveBeenCalledWith("test-slug");
});