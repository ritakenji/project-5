import Spotlight from "@/Components/Spotlight";
import Link from "next/link";

export default function HomePage({ artPieces }) {
  const randomIndex = Math.floor(Math.random() * artPieces.length);

  const artPiece = artPieces[randomIndex];

  return (
    <>
      <Link href={"/overview"}>Go to overview</Link>;
      <Spotlight artPiece={artPiece} />
    </>
  );
}
