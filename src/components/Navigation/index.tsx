import { styled } from "@linaria/react";
import { size } from "../../layout/helpers";

const NavWrapper = styled.div`
  display: flex;
  gap: ${size(4)};
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const PrimaryUl = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: ${size(3)};
  font-family: var(--font-secondary);
  @media (max-width: 900px) {
    display: none;
  }
`;

const SecondaryUl = styled.ul`
  padding-left: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  gap: ${size(1.5)};
`;

const NavLinkText = styled.a`
  color: var(--c-text-primary);
  font-weight: 500;
  text-decoration: none;
  font-family: var(--font-styrene);
  font-size: 0.875rem;
`;

const LinkDivider = styled.span`
  border-left: 1px solid var(--c-foreground-grey);
  height: ${size(5.25)};
  width: 1px;
  aria-hidden: true;
  display: block;
  @media (max-width: 600px) {
    display: none;
  }
`;

export default function Navigation() {
  return (
    <NavWrapper>
      <StyledNav aria-label="Primary">
        <PrimaryUl>
          <li>
            <NavLinkText>Köp bil</NavLinkText>
          </li>
          <li>
            <NavLinkText>Sälj bil</NavLinkText>
          </li>
          <li>
            <NavLinkText>Värdera bil</NavLinkText>
          </li>
        </PrimaryUl>
      </StyledNav>
      <StyledNav aria-label="Secondary">
        <SecondaryUl>
          <li>
            <a href="#">
              <img src="/icons/header/icon-search.png" alt="Search-icon" />
            </a>
          </li>
          <LinkDivider />
          <li>
            <a href="#">
              <img src="/icons/header/icon-user.png" alt="User-icon" />
            </a>
          </li>
          <LinkDivider />
          <li>
            <a href="#">
              <img
                src="/icons/header/icon-hamburger.png"
                alt="Hamburger menu-icon"
              />
            </a>
          </li>
        </SecondaryUl>
      </StyledNav>
    </NavWrapper>
  );
}
