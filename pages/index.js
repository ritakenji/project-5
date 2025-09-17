import ArtPieceCard from "@/Components/ArtPieceCard";
import MainTitle from "@/Components/MainTitle";
import { useState } from "react";
import { useEffect } from "react";

export default function HomePage({
  artPieces,
  handleToggleFavorite,
  isFavorite,
}) {
  const [randomArtPiece, setRandomArtPiece] = useState(null);

  useEffect(() => {
    //useEffect so that the page doesnt render each time we click on the favbutton
    if (artPieces?.length) {
      setRandomArtPiece(
        artPieces[Math.floor(Math.random() * artPieces.length)]
      );
    }
  }, [artPieces]);

  // isFavorite does not reflect here, not sure why, also the favButtoon doesnt work

  /*  const randomIndex = Math.floor(Math.random() * artPieces.length);
  const randomArtPiece = artPieces[randomIndex]; <--- this was a bit connfusing so i looked at how we did it in class instead */

  if (!randomArtPiece) return null;

  return (
    <>
      <MainTitle />
      <ArtPieceCard
        artPiece={randomArtPiece}
        handleToggleFavorite={handleToggleFavorite}
        isFavorite={isFavorite}
      >
        {randomArtPiece.artist}
      </ArtPieceCard>
    </>
  );
}
