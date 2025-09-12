import Image from "next/image";
import styled from "styled-components";

export default function Spotlight({ artPiece }) {
  return (
    <Wrapper>
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name}
        height={150}
        width={350}
      />
      {artPiece.artist}
    </Wrapper>
  );
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`

