import Image from "next/image";
import styled from "styled-components";
import useSWR from "swr";

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
        return (
          <ArtPreview key={id}>
            <Image
              src={card.imageSource}
              alt={card.name}
              height={150}
              width={350}
            />
            {card.name} by {card.artist}
          </ArtPreview>
        );
      })}
    </GalleryList>
  );
}

const GalleryList = styled.ul`
  list-style-type: none;
`;

const ArtPreview = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 30px;
`;
