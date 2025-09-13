import { useRouter } from "next/router";
import DetailCard from "@/Components/DetailCard";
export default function DetailPiece({ artPieces }) {
  const router = useRouter();
  const { slug } = router.query;

  const card = artPieces.find(piece => piece.slug === slug)

  return <DetailCard card={card}/>;
}
