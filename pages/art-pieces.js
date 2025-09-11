import useSWR from "swr";
import Image from "next/image";

export default function Overview() {
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
          {data.map((card, id) => (
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
          ))}
        </ul>
      </main>
      <footer>{/* This should be a Component */}</footer>
    </>
  );
}
