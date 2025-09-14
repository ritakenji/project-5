import MainTitle from "@/Components/MainTitle";
import List from "@/Components/List";

export default function Overview({
  data,
  handleToggleFavorite,
  isSlugFavorite,
}) {
  return (
    <>
      <MainTitle />
      <List
        data={data}
        handleToggleFavorite={handleToggleFavorite}
        isSlugFavorite={isSlugFavorite}
      />
    </>
  );
}
