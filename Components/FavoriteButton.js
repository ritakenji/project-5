import Image from "next/image";
import styled from "styled-components";

export default function FavoriteButton({
  slug,
  isFavorite,
  handleToggleFavorite,
}) {
  return (
    <FavButton onClick={() => handleToggleFavorite(slug)} aria-label="favorite">
      {isFavorite ? (
        <HeartFilled
          src="/heart-filled.svg"
          alt="Is liked"
          height={15}
          width={15}
        />
      ) : (
        <Heart src="/heart.svg" alt="Is not liked" height={15} width={15} />
      )}
    </FavButton>
  );
}

const FavButton = styled.button`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;

const HeartFilled = styled(Image)``;

const Heart = styled(Image)``;
