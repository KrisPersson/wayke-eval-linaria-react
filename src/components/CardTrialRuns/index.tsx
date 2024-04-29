import { css, styled } from "@linaria/core";
import { size } from "../../layout/helpers";
import Image from "next/image";
import Link from "next/link";

interface ICardTrialRunsProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
}

const cardTrialRunsClass = css`
  display: flex;
  flex-direction: column;
`

const imgWrapperClass = css`
  overflow: hidden;
`

const imgClass = css`
  align-self: center;
  object-fit: cover;
  object-position: center;
  border-radius: ${size(2.25)};
`

const infoBoxClass = css`
  display: flex;
  justify-content: space-between;
  line-height: 1.33;
  padding: ${size(1.5)} ${size(1)};
`

const h3Class = css`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.4;
`

const pClass = css`
  margin: 0;
  font-size: 0.75rem;
`

const arrowIconClass = css`
  align-self: center;
`

const showVideoClass = css`
  font-size: 0.75rem;
  line-height: 1.33;
  color: var(--c-text-secondary);
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: ${size(0.5)};
`

export default function CardTrialRuns({
  imgSrc,
  title,
  imgAlt,
}: ICardTrialRunsProps) {
  return (
    <article className={cardTrialRunsClass}>
      <div className={imgWrapperClass}>
        <Image
          width={632}
          height={250}
          src={imgSrc}
          alt={imgAlt}
          className={imgClass}
        />
      </div>
      <div className={infoBoxClass}>
        <div>
          <p className={pClass}>Provkörning</p>
          <h3 className={h3Class}>{title}</h3>
        </div>
        <p className={showVideoClass}>
          Visa video
          <Image
            className={arrowIconClass}
            src="/icons/arrow-right.svg"
            width={24}
            height={24}
            alt="Arrow right icon"
            aria-hidden
          />
        </p>
      </div>
    </article>
  );
}
