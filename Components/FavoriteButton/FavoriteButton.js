import Image from "next/image";

export default function FavoriteButton({ slug, onToggleFavorite, favorites }) {
 const isFavorite = favorites.includes(slug)
  return (
    <button
      className="favorite-button"
      onClick={() => onToggleFavorite(slug)}
      aria-label="favorite"
    >
      {isFavorite ? (
        <Image
          src="/heart-solid.svg"
          alt="heart-solid"
          width={24}
          height={24}
        />
      ) : (
        <Image src="/heart.svg" alt="heart" width={24} height={24} />
      )}
    </button>
  );
}
