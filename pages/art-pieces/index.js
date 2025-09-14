import styled from "styled-components";
import List from "@/Components/List";

export default function Overview({
  artPieces,
  slug,
  favorites,
  onToggleFavorite,
}) {
  console.log("Art: ", artPieces);

  return (
    <>
      <main>
        <Title>Art Gallery</Title> {/* This should be a Component?? */}
        <List artPieces={artPieces} slug={artPieces.slug}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}/>
      </main>
      <footer>{/* This should be a Component */}</footer>
    </>
  );
}

const Title = styled.h1`
  text-align: center;
`;
