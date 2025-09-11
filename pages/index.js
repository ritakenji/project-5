import useSWR from "swr";
import Image from "next/image";

/* 
******** Acceptance Criteria

All art pieces are displayed in a list.✅ 

Each art piece's image is displayed.✅ 

Each art piece's title is displayed.✅ 

Each art piece's artist's name is displayed.✅ 

**********Tasks

Create a component to render the list of art pieces.✅ 

Create a component to render each Art Piece Preview. ✅ 

*/

export default function HomePage() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  console.log("Our data: ", data);
  // from data we will use slug, name, artist and imgsource

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <main>
        <h1>Art Gallery</h1> {/* This should be a Component */}
        <ul>
          {data.map((card, id) => {
            return (
              <li key={id}>
                <Image
                  src={card.imageSource}
                  alt={card.name}
                  height={300}
                  width={300}
                />
                ;
                <p>
                  {card.name} by {card.artist}
                </p>
              </li>
            );
          })}
        </ul>
      </main>
      <footer>{/* This should be a Component */}</footer>
    </>
  );
}
