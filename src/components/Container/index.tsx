import { css } from "@linaria/core";
import { styled } from "@linaria/react";

const ContainerStyled = styled.div`
  padding-inline: 20px;
  @media (min-width: 1350px) {
    padding-inline: 80px;
  }
`;

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ContainerStyled>{children}</ContainerStyled>;
}
