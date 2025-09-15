import Image from "next/image";
import styled from "styled-components";

export default function DetailCard({ card }) {
  console.log("fff", card);

  return (
    <>
      <Card>
        <Image
          src={card.imageSource}
          alt={card.name}
          height={150}
          width={350}
        />
        {card.name} by {card.artist}, {card.year}, {card.genre}
      </Card>
    </>
  );
}
const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 30px;
`;
