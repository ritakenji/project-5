import ArtPieceCard from "@/Components/ArtPieceCard";
import MainTitle from "@/Components/MainTitle";

export default function HomePage({ data, handleToggleFavorite, isFavorite }) {
  const randomIndex = Math.floor(Math.random() * data.length);

  const randomArtPiece = data[randomIndex];

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
