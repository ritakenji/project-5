import Spotlight from "@/Components/Spotlight";
import Link from "next/link";
import styled from "styled-components";

export default function HomePage({ artPieces }) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);

  const artPiece = artPieces[randomIndex];

  return (
    <>
      <Main>
        <Spotlight artPiece={artPiece} />
      </Main>
    </>
  );
}

const Main = styled.main`
  margin: 30px;
`;
