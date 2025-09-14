import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton/FavoriteButton";

export default function ArtPieceCard({
  card,
  favorites,
  slug,
  onToggleFavorite,
}) {
  return (
    <>
      <Link href={`/art-pieces/${card.slug}`}>
        <Card>
          <Image
            src={card.imageSource}
            alt={card.name}
            height={150}
            width={350}
          />
          {card.name} by {card.artist}
        </Card>
      </Link>
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
  margin: 15px 0;
`;
