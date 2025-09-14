import MainTitle from "@/Components/MainTitle";
import List from "@/Components/List";
import styled from "styled-components";

export default function Overview({
  data,
  handleToggleFavorite,
  isSlugFavorite,
}) {
  return (
    <Wrapper>
      <MainTitle />
      <List
        data={data}
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
