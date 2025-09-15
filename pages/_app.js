import GlobalStyle from "../styles";
import Navigation from "@/Components/Navigation";
import Layout from "@/Components/Layout";
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
    console.log("handletogglefav in app: ", slug);
    setArtInfo((currentArtInfo) => {
      // Find the item with the matching slug
      const foundArt = currentArtInfo.find((item) => item.slug === slug);

      if (foundArt) {
        // If the item exists, map over the array and toggle its isFavorite status
        return currentArtInfo.map((item) =>
          item.slug === slug ? { ...item, isFavorite: !item.isFavorite } : item
        );
      } else {
        // If the item doesn't exist, add it to the array with isFavorite: true
        return [...currentArtInfo, { slug, isFavorite: true }];
      }
    });
  }

  // A helper function to check if a specific slug is favorited
  function isSlugFavorite(slug) {
    return artInfo.find((item) => item.slug === slug)?.isFavorite || false;
  }

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  /*   const isSlugIdInArtInfo = artInfo.find(
    (element) => element.slug === data.slug
  ); */

  /*   const isFavorite = isSlugIdInArtInfo ? isSlugIdInArtInfo.isFavorite : false;
   */
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          artPieces={data}
          handleToggleFavorite={handleToggleFavorite}
          isSlugFavorite={isSlugFavorite}
        />
      </Layout>
      <Navigation />
    </>
  );
}
