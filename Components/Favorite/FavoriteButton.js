import HeartFilled from "./heart-filled.svg";
import Heart from "./heart.svg?react";

export default function FavoriteButton({ slug, isFavorite, onToggleFavorite }) {
  return (
    <button onClick={() => onToggleFavorite(slug)} aria-label="favorite">
      {isFavorite ? <HeartFilled /> : <Heart />}
    </button>
  );
}
