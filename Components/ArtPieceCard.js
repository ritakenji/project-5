import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "@/Components/FavoriteButton";

export default function ArtPieceCard({
  artPiece,
  handleToggleFavorite,
  isFavorite,
  children,
}) {
  return (
    <>
      <FavoriteButton
        handleToggleFavorite={handleToggleFavorite}
        slug={artPiece.slug}
        isFavorite={isFavorite}
      />
      <Linked href={`/art-pieces/${artPiece.slug}`}>
        <Image
          src={artPiece.imageSource}
          alt={artPiece.name}
          height={450}
          width={350}
        />
        <p>{children}</p>
      </Linked>
    </>
  );
}

const Linked = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
