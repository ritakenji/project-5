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
        {children}
        {/*  // initially <p>{children}</p> but then this makes it hard to stylize whatever {children} is, the <p> should be used only where the {children} are being declared, like in 'favorites.js' */}
      </Linked>
    </>
  );
}

const Linked = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
