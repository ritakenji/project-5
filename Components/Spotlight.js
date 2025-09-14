import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "@/Components/FavoriteButton/FavoriteButton";

export default function Spotlight({
  artPiece,
  slug,
  favorites,
  onToggleFavorite,
}) {
  return (
    <Wrapper>
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name}
        height={150}
        width={350}
      />
      {artPiece.artist}
      <FavoriteButton
        slug={artPiece.slug}
        onToggleFavorite={onToggleFavorite}
        favorites={favorites}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;
