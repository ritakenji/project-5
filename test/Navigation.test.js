import { render, screen } from "@testing-library/react";
import Navigation from "@/Components/Navigation";

describe("Navigation component", () => {
  test("renders all nav links", () => {
    render(<Navigation />);

    // check 3 links
    expect(screen.getByText(/Spotlight/i)).toBeInTheDocument();
    expect(screen.getByText(/Art Pieces/i)).toBeInTheDocument();
    expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
  });
});
