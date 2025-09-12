import GlobalStyle from "../styles";
import Navigation from "@/Components/Navigation";

import useSWR from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );
  // from data we will use slug, name, artist and imgsource

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} artPieces={data} />
      <Navigation />
    </>
  );
}
