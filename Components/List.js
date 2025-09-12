import styled from "styled-components";
import ArtPieceCard from "./ArtPieceCard";

export default function List({artPieces, card}) {
  
  return (
    <GalleryList>
      {artPieces?.map((card, id) => {
        return <ArtPieceCard key={id} card={card} />;
      })}
    </GalleryList>
  );
}

const GalleryList = styled.ul`
  list-style-type: none;
`;
