import { css } from "@linaria/core";
import { size } from "../../layout/helpers";

interface ICardProductProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  numListings: number;
  lowestPrice: string;
}

const cardProductClass = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const imgWrapperClass = css`
  border-radius: 18px;
  overflow: hidden;
`;

const imgClass = css`
  display: block;
`;

const infoBoxClass = css`
  display: flex;
  justify-content: space-between;
  gap: ${size(2)};
  line-height: 1.4;
  padding: ${size(1.5)} ${size(1)};
`;

const titleClass = css`
  margin: 0;
  font-size: 1.25rem;
  text-decoration: none;
  color: var(--c-text-secondary);

  &::before {
    content: "";
    position: absolute;
    inset: 0px;
  }
`;

const pClass = css`
  margin: 0;
  font-size: 0.875rem;
  max-width: 40ch;
`;

export default function CardProduct({
  imgSrc,
  title,
  numListings,
  lowestPrice,
  imgAlt,
}: ICardProductProps) {
  return (
    <article className={cardProductClass}>
      <div className={imgWrapperClass}>
        <img src={imgSrc} alt={imgAlt} className={imgClass} />
      </div>
      <div className={infoBoxClass}>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a href="#" className={titleClass}>
            {title}
          </a>
          <p className={pClass}>
            {numListings} {numListings === 1 ? "annons" : "annonser"}
          </p>
        </div>
        <div style={{ textAlign: "right", margin: "auto 0" }}>
          <p
            className={pClass}
            style={{ fontSize: "0.75rem", whiteSpace: "nowrap" }}
          >
            Köp från
          </p>
          <p className={pClass} style={{ whiteSpace: "nowrap" }}>
            {lowestPrice} kr
          </p>
        </div>
      </div>
    </article>
  );
}
