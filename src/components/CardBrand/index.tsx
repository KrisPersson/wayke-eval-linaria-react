import { css, styled } from "@linaria/core";
import { size } from "../../layout/helpers";
import Image from "next/image";

interface ICardBrandProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  numCars: number;
  numModels: number;
}

const cardBrandClass = css`
  display: grid;
  grid-template-columns: 64px 1fr 16px;
  padding: ${size(2)};
  background: var(--c-base-white);
  border-radius: ${size(2.25)};
`;

const imgClass = css`
  grid-column: 1 / span 1;
  align-self: center;
  object-fit: contain;
  object-position: center;
`;

const infoBoxClass = css`
  grid-column: 2 / span 1;
  line-height: 1.4;
  padding: ${size(1.5)} ${size(1)};
`;

const infoDataClass = css`
  display: flex;
  align-items: center;
  gap: ${size(0.5)};
  margin-top: ${size(0.5)};
`;

const h3Class = css`
  margin: 0;
  font-size: 1.25rem;
`;

const pClass = css`
  margin: 0;
  font-size: 0.875rem;
`;

const arrowIconClass = css`
  grid-column: 3 / -1;
  align-self: center;
`;

const DotDivider = styled("div")({
  width: "4px",
  height: "4px",
  borderRadius: "100vmax",
  backgroundColor: "var(--c-text-secondary)",
});

export default function CardBrand({
  imgSrc,
  title,
  numCars,
  numModels,
  imgAlt,
}: ICardBrandProps) {
  return (
    <article className={cardBrandClass}>
      <Image
        width={64}
        height={64}
        src={imgSrc}
        alt={imgAlt}
        className={imgClass}
      />
      <div className={infoBoxClass}>
        <div>
          <h3 className={h3Class}>{title}</h3>
          <div className={infoDataClass}>
            <p className={pClass}>
              {numCars} {numCars === 1 ? "bil" : "bilar"}
            </p>
            <DotDivider />
            <p className={pClass}>
              {numModels} {numModels === 1 ? "modell" : "modeller"}
            </p>
          </div>
        </div>
      </div>
      <Image
        className={arrowIconClass}
        src="/icons/arrow-right.svg"
        width={20}
        height={20}
        alt="Arrow right icon"
        aria-hidden
      />
    </article>
  );
}
