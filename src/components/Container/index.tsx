import { styled } from "@linaria/react";

const ContainerStyled = styled.div`
  padding-inline: var(--gutter);
`;

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ContainerStyled>{children}</ContainerStyled>;
}
