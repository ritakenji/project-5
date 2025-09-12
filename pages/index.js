import Spotlight from "@/Components/Spotlight";
import Link from "next/link";
import styled from "styled-components";

export default function HomePage({ artPieces }) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);

  const artPiece = artPieces[randomIndex];

  return (
    <>
      <Main>
        <GoBack href={"/overview"}> ← Go to overview</GoBack>
        <Spotlight artPiece={artPiece} />
      </Main>
    </>
  );
}

const GoBack = styled(Link)`
  text-decoration: none;
  color: #000;
`;

const Main = styled.main`
  margin: 30px;
`