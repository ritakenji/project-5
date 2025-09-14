import styled from "styled-components";
import ArtPieceCard from "./ArtPieceCard";

export default function List({ data, handleToggleFavorite, isSlugFavorite }) {
  return (
    <GalleryList>
      {data?.map((artPiece) => {
        const isFavorite = isSlugFavorite(artPiece.slug);
        return (
          <ArtPieceCard
            key={artPiece.slug}
            artPiece={artPiece}
            handleToggleFavorite={handleToggleFavorite}
            isFavorite={isFavorite}
          >
            {artPiece.name} by {artPiece.artist}
          </ArtPieceCard>
        );
      })}
    </GalleryList>
  );
}

const GalleryList = styled.ul`
  list-style-type: none;
`;
