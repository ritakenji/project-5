import styled from "styled-components";

export default function Layout({ children }) {
  return <Content>{children}</Content>;
}

const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
