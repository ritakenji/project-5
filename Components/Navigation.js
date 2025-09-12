import Link from "next/link";
import styled from "styled-components";

export default function Navigation() {
  return (
    <>
      <nav>
        <Link href={"/"}>Spotlight</Link>
        <Link href={"/overview"}>Art Pieces</Link>
        <Link href={"/favorites"}>Favorites</Link>
      </nav>
    </>
  );
}

const NavBar = styled.nav``;
