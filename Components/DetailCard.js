import Image from "next/image";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton/FavoriteButton";

export default function DetailCard({
  card,
  slug,
  favorites,
  onToggleFavorite,
}) {
  console.log("fff", card);

  return (
    <>
      <Card>
        <Image
          src={card.imageSource}
          alt={card.name}
          height={150}
          width={350}
        />
        {card.name} by {card.artist}, {card.year}, {card.genre}
      </Card>
      <FavoriteButton
        slug={card.slug}
        onToggleFavorite={onToggleFavorite}
        favorites={favorites}
      />
    </>
  );
}
const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 30px;
`;
