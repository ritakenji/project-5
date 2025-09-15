import styled from "styled-components";
import ArtPieceCard from "./ArtPieceCard";

export default function List({ artPieces, favorites, onToggleFavorite }) {
  return (
    <GalleryList>
      {artPieces?.map((card, id) => {
        return (
          <ArtPieceCard
            key={id}
            card={card}
            slug={artPieces.slug}
            onToggleFavorite={onToggleFavorite}
            favorites={favorites}
          />
        );
      })}
    </GalleryList>
  );
}

const GalleryList = styled.ul`
  list-style-type: none;
  margin-bottom: 5rem;
`;
