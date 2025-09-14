import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton";

export default function DetailCard({
  artPiece,
  handleToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <Card>
        <FavoriteButton
          handleToggleFavorite={handleToggleFavorite}
          artPiece={artPiece.slug}
          isFavorite={isFavorite}
        />
        <Image
          src={artPiece.imageSource}
          alt={artPiece.name}
          height={150}
          width={350}
        />
        {artPiece.name} by {artPiece.artist}, {artPiece.year}, {artPiece.genre}
      </Card>
    </>
  );
}
const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 30px;
`;
