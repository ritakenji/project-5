import styled from "styled-components";
import List from "@/Components/List";

export default function Overview({
  data,
  handleToggleFavorite,
  isSlugFavorite,
}) {
  return (
    <>
      <main>
        <Title>Art Gallery</Title>
        <List
          data={data}
          handleToggleFavorite={handleToggleFavorite}
          isSlugFavorite={isSlugFavorite}
        />
      </main>
    </>
  );
}

const Title = styled.h1`
  text-align: center;
`;
