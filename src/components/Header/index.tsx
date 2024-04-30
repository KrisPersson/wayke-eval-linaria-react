import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import Container from "../Container/index";
import Navigation from "../Navigation/index";
import { size } from "../../layout/helpers";

const StyledHeader = styled.header`
  padding-top: 24px;
  margin-bottom: var(--subheader-gap);
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${size(2)};
`;

const imgClass = css`
  @media (max-width: 370px) {
    max-width: 120px;
    height: auto;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Inner>
          <img className={imgClass} src="/logo/wayke.svg" alt="Wayke logo" />
          <Navigation />
        </Inner>
      </Container>
    </StyledHeader>
  );
}
