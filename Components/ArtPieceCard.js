import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

export default function ArtPieceCard({ card }) {
  return (
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
  );
}

const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 30px;
`;
