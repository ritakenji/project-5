import styled from "styled-components";
import ArtPieceCard from "./ArtPieceCard";

export default function List({ data, handleToggleFavorite, isFavorite }) {
  return (
    <GalleryList>
      {data?.map((artPiece) => {
        return (
          <ArtPieceCard
            key={artPiece.slug}
            artPiece={artPiece}
            handleToggleFavorite={handleToggleFavorite}
            isFavorite={isFavorite}
          />
        );
      })}
    </GalleryList>
  );
}

const GalleryList = styled.ul`
  list-style-type: none;
`;
