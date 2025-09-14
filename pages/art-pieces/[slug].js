import { useRouter } from "next/router";
import ArtPieceCard from "@/Components/ArtPieceCard";
import Image from "next/image";
import styled from "styled-components";

export default function DetailPiece({
  data,
  handleToggleFavorite,
  isSlugFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const artPiece = data.find((element) => element.slug === slug);
  const isFavorite = isSlugFavorite(artPiece.slug);

  function handleReturnToPage() {
    router.push(`/art-pieces`);
  }

  return (
    <Wrapper>
      <GoBackButton onClick={handleReturnToPage}>
        <Image src="/arrow-left.png" alt="Go Back" height={30} width={30} />
      </GoBackButton>
      <ArtPieceCard
        artPiece={artPiece}
        handleToggleFavorite={handleToggleFavorite}
        isFavorite={isFavorite}
      >
        {artPiece.name} by {artPiece.artist}, {artPiece.year}, {artPiece.genre}
      </ArtPieceCard>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6vh;
`;

const GoBackButton = styled.button`
  background-color: transparent;
  border: none;
`;
