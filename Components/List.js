import Image from "next/image";
import useSWR from "swr";

export default function List() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );
  // from data we will use slug, name, artist and imgsource

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <ul>
      {data.map((card, id) => {
        return (
          <li key={id}>
            <Image
              src={card.imageSource}
              alt={card.name}
              height={300}
              width={700}
            />
            ;
            <p>
              {card.name} by {card.artist}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
