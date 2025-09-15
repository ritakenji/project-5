index:

import ArtPieceCard from "@/Components/ArtPieceCard";
import MainTitle from "@/Components/MainTitle";

export default function HomePage({ artPieces, handleToggleFavorite, isFavorite }) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);

  const randomArtPiece = artPieces[randomIndex];

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
