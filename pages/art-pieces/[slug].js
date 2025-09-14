import { useRouter } from "next/router";
import DetailCard from "@/Components/DetailCard";
import Image from "next/image";

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
    <>
      <button onClick={handleReturnToPage}>
        <Image src="/arrow-left.png" alt="Go Back" height={30} width={30} />
      </button>
      <DetailCard
        artPiece={artPiece}
        handleToggleFavorite={handleToggleFavorite}
        isFavorite={isFavorite}
      />
    </>
  );
}
