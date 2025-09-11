import styled from "styled-components";
import List from "@/Components/List";

/* 
******** Acceptance Criteria

All art pieces are displayed in a list.✅ 

Each art piece's image is displayed.✅ 

Each art piece's title is displayed.✅ 

Each art piece's artist's name is displayed.✅ 

**********Tasks

Create a component to render the list of art pieces.✅ 

Create a component to render each Art Piece Preview. ✅

*/

export default function HomePage() {
  return (
    <>
      <main>
        <Title>Art Gallery</Title> {/* This should be a Component?? */}
        <List />
      </main>
      <footer>{/* This should be a Component */}</footer>
    </>
  );
}

const Title = styled.h1`
  text-align: center;
`;
