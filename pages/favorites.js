import styled from "styled-components";
import ArtPieceCard from "@/Components/ArtPieceCard";
import MainTitle from "@/Components/MainTitle";

export default function Favorites({
  isSlugFavorite,
  handleToggleFavorite,
  artPieces,
  artInfo,
}) {
  const FavSlug = artInfo
    .filter(
      (
        piece //filter the art pieces to get fav ones
      ) => piece.isFavorite
    )
    .map((piece) => piece.slug);

  const favoriteArtPieces = artPieces.filter((piece) =>
    FavSlug.includes(piece.slug)
  );

  return (
    <FavoritesList>
      <MainTitle />
      {favoriteArtPieces.length > 0 ? (
        favoriteArtPieces.map((piece) => (
          <ArtPieceCard
            key={piece.slug}
            artPiece={piece}
            handleToggleFavorite={handleToggleFavorite}
            isFavorite={isSlugFavorite(piece.slug)}
          >
            {piece.name} by {piece.artist}
          </ArtPieceCard>
        ))
      ) : (
        <p>No favorites added yet. Start by liking some art pieces! 💖</p>
      )}
    </FavoritesList>
  );
}

const FavoritesList = styled.ul`
  margin-bottom: 5rem;
`;
