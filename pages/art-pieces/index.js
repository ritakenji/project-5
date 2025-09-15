import MainTitle from "@/Components/MainTitle";
import List from "@/Components/List";
import styled from "styled-components";

export default function Overview({
  artPieces,
  handleToggleFavorite,
  isSlugFavorite,
}) {
  return (
    <Wrapper>
      <MainTitle />
      <List
        artPieces={artPieces}
        handleToggleFavorite={handleToggleFavorite}
        isSlugFavorite={isSlugFavorite}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
