import ArtPieceCard from "@/Components/ArtPieceCard";
import styled from "styled-components";
export default function Favorites({ favorites, onToggleFavorite, artPieces }) {
  return (
    <FavoritesList>
        <Title>Favorites</Title>
      {artPieces.map((artPiece) => (
        <ArtPieceCard
          key={artPiece.slug}
          card={artPiece}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
        />
      ))}
    </FavoritesList>
  );
}

const FavoritesList = styled.ul`
    margin-bottom: 5rem;
`

const Title = styled.h1`
    text-align: center;
`
