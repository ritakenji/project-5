import ArtPieceCard from "@/Components/ArtPieceCard";
import styled from "styled-components";

export default function HomePage({ data, handleToggleFavorite, isFavorite }) {
  const randomIndex = Math.floor(Math.random() * data.length);

  const randomArtPiece = data[randomIndex];

  return (
    <>
      <Main>
        <ArtPieceCard
          artPiece={randomArtPiece}
          handleToggleFavorite={handleToggleFavorite}
          isFavorite={isFavorite}
        />
      </Main>
    </>
  );
}

const Main = styled.main`
  margin: 30px;
`;
