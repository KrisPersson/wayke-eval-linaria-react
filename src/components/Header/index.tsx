import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import Container from "../Container/index";
import Navigation from "../Navigation/index";

const StyledHeader = styled.header`
  padding-top: 24px;
  margin-bottom: var(--subheader-gap);
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Inner>
          <img src="/logo/wayke.svg" alt="Wayke logo" />
          <Navigation />
        </Inner>
      </Container>
    </StyledHeader>
  );
}
