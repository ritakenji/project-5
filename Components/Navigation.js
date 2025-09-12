import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <NavBar>
        <NavLinks href={"/"}>Spotlight</NavLinks>
        <NavLinks href={"/art-pieces"}>Art Pieces</NavLinks>
        <NavLinks href={"/favorites"}>Favorites</NavLinks>
      </NavBar>
    </>
  );
}

const NavBar = styled.nav`
  background-color: #8895c9;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100vw;
`;

const NavLinks = styled(Link)`
  text-decoration: none;
  color: black;
  border: solid 0.1rem black;
  padding: 1rem;
  display: flex;
  flex: 1;
  justify-content: center;
  font-size: 1.4em;
`;
