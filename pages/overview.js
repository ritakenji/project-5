import styled from "styled-components";
import List from "@/Components/List";


export default function Overview({artPieces}) {
  console.log("Art: ", artPieces);
  
  return (
    <>
      <main>
        <Title>Art Gallery</Title> {/* This should be a Component?? */}
        <List artPieces={artPieces}/>
      </main>
      <footer>{/* This should be a Component */}</footer>
    </>
  );
}

const Title = styled.h1`
  text-align: center;
`;
