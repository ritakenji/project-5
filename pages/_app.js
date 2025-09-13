import GlobalStyle from "../styles";
import Navigation from "@/Components/Navigation";
import { useState } from "react";

import useSWR from "swr";

export default function App({ Component, pageProps }) {
  const [artInfo, setArtInfo] = useState([]); //This wil be the array with object {slug, isFavorite}

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  function handleToggleFavorite(slug) {
    // We need to know the slug of the artpiece that we clicked on.
    // The initial state of artInfo is an empty array.
    // We need to search if the slug of the artPiece that we clicked is in artInfo.
    // If the slug is found, we need to change the state of isFavorite.
    // If the slug is not found, we need to add this art*iece as favorite. {slug, isFavorite}

    // In the setter function, we can pass a function that return the new value to be set.
    setArtInfo(() => {
      // find() will return us the element or undefine.
      const findArt = artInfo.find((element) => element.slug === slug);

      if (findArt) {
        // If we find the art piece.
        // We want to change the state of isFavorite.
        return artInfo.map((element) =>
          element.slug === slug
            ? { ...element, isFavorite: !element.isFavorite }
            : element
        );
      }
      // If we didn't find the joke, we want to add it.
      return [...artInfo, { slug, isFavorite: true }];
    });
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const isSlugIdInArtInfo = artInfo.find((element) => element.slug === slug);

  const isFavorite = isSlugIdInArtInfo ? isSlugIdInArtInfo.isFavorite : false;

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        data={data}
        handleToggleFavorite={handleToggleFavorite}
        isFavorite={isFavorite}
      />
      <Navigation />
    </>
  );
}
