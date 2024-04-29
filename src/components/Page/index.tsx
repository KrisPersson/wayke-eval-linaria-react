import { css } from "@linaria/core";
import { size } from "../../layout/helpers";
import Container from "../Container/index";
import Link from "next/link";
import Image from "next/image";

const pageClass = css`
  margin-bottom: ${size(8)};
  display: flex;
  flex-direction: column;
  row-gap: ${size(8)};
`;

const pageSectionClass = css``;

const headingClass = css`
  margin: 0;
  margin-bottom: ${size(2)};
  font-size: 1.5rem;
  line-height: 1.33;
`;

const showMoreLinkClass = css`
  font-size: 1rem;
  line-height: 1.5;
  color: theme.colors.textSecondary;
  display: flex;
  align-items: center;
  gap: ${size(1)};
  white-space: nowrap;
`;

const sectionHeaderClass = css`
  display: flex;
  justify-content: space-between;
`;

const arrowIconClass = css`
  margin: auto 0;
`;

export function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className={pageClass}>{children}</main>;
}

export function PageSection({
  children,
  id,
  heading,
  showMoreLink,
}: Readonly<{
  children: React.ReactNode;
  id: string;
  heading: string;
  showMoreLink?: boolean;
}>) {
  return (
    <section id={id} className={pageSectionClass}>
      <Container>
        <header className={sectionHeaderClass}>
          <h2 className={headingClass}>{heading}</h2>
          {showMoreLink && (
            <Link href="#" className={showMoreLinkClass}>
              Visa alla
              <Image
                className={arrowIconClass}
                src="/icons/arrow-right.svg"
                width={24}
                height={24}
                alt="Arrow-right icon"
                aria-hidden
              />
            </Link>
          )}
        </header>
        {children}
      </Container>
    </section>
  );
}
