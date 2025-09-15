import Spotlight from "@/Components/Spotlight";
import styled from "styled-components";

export default function HomePage({
  slug,
  favorites,
  onToggleFavorite,
  artPieces,
}) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);

  const artPiece = artPieces[randomIndex];

  return (
    <>
      <Main>
        <Spotlight
          artPiece={artPiece}
          slug={artPiece.slug}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
        />
      </Main>
    </>
  );
}

const Main = styled.main`
  margin: 30px;
`;
