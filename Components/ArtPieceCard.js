import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "@/Components/FavoriteButton";

export default function ArtPieceCard({
  artPiece,
  handleToggleFavorite,
  isFavorite,
}) {
  return (
    <>
      <FavoriteButton
        handleToggleFavorite={handleToggleFavorite}
        artPiece={artPiece.slug}
        isFavorite={isFavorite}
      />
      <Link href={`/art-pieces/${artPiece.slug}`}>
        <Card>
          <Image
            src={artPiece.imageSource}
            alt={artPiece.name}
            height={150}
            width={350}
          />
          {artPiece.name} by {artPiece.artist}
        </Card>
      </Link>
    </>
  );
}

const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 30px;
`;
