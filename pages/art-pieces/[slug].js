import { useRouter } from "next/router";
import DetailCard from "@/Components/DetailCard";
import Image from "next/image";

export default function DetailPiece({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const card = artPieces.find((piece) => piece.slug === slug);

  function handleReturnToPage() {
    router.push(`/art-pieces`);
  }

  return (
    <>
      <button onClick={handleReturnToPage}>
        <Image src="/arrow-left.png" alt="Go Back" height={30} width={30} />
      </button>
      <DetailCard card={card} />
    </>
  );
}
