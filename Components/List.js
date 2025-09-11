import styled from "styled-components";
import useSWR from "swr";
import ArtPieceCard from "./ArtPieceCard";

export default function List() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );
  // from data we will use slug, name, artist and imgsource

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <GalleryList>
      {data.map((card, id) => {
        return <ArtPieceCard key={id} card={card} />;
      })}
    </GalleryList>
  );
}

const GalleryList = styled.ul`
  list-style-type: none;
`;
