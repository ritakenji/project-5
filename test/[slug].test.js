import { render, screen, fireEvent } from "@testing-library/react";
import DetailPiece from "@/pages/art-pieces/[slug]";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockArtPieces = [
  {
    slug: "test-slug",
    name: "Test Painting",
    artist: "Test Artist",
    imageSource: "/test.jpg",
    year: 2025,
    genre: "Abstract",
  },
];

test("renders DetailPiece and buttons", () => {
  const mockPush = jest.fn();
  const mockToggle = jest.fn();
  const mockIsFavorite = () => true;

  useRouter.mockReturnValue({ query: { slug: "test-slug" }, push: mockPush });

  render(
    <DetailPiece
      artPieces={mockArtPieces}
      handleToggleFavorite={mockToggle}
      isSlugFavorite={mockIsFavorite}
    />
  );

  // Check title
  expect(screen.getByText(/Test Painting by Test Artist/i)).toBeInTheDocument();

  // Click favorite button
  fireEvent.click(screen.getByRole("button", { name: /favorite/i }));
  expect(mockToggle).toHaveBeenCalledWith("test-slug");

  // Go Back
  fireEvent.click(screen.getByLabelText("go-back"));
  expect(mockPush).toHaveBeenCalledWith("/art-pieces");

  // Favorite
  fireEvent.click(screen.getByLabelText("favorite"));
  expect(mockToggle).toHaveBeenCalledWith("test-slug");
});
