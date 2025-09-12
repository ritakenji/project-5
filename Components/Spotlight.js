import Image from "next/image";

export default function Spotlight({ artPiece }) {
  return (
    <div>
      <Image
        src={artPiece.imageSource}
        alt={artPiece.name}
        height={150}
        width={350}
      />
      {artPiece.artist}
    </div>
  );
}
