import { css } from "@linaria/core";
import { size } from "../../layout/helpers";

interface ICardTrialRunsProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
}

const cardTrialRunsClass = css`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const imgWrapperClass = css`
  overflow: hidden;
`;

const imgClass = css`
  border-radius: ${size(2.25)};
  display: block;
`;

const infoBoxClass = css`
  display: flex;
  justify-content: space-between;
  line-height: 1.33;
  gap: ${size(1)};
  padding: ${size(1.5)} ${size(1)};
`;

const aClass = css`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.4;
  color: currentColor;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    inset: 0px;
  }
`;

const pClass = css`
  margin: 0;
  font-size: 0.75rem;
`;

const arrowIconClass = css`
  align-self: center;
`;

const showVideoClass = css`
  font-size: 0.75rem;
  line-height: 1.33;
  color: var(--c-text-secondary);
  text-decoration: underline;
  display: flex;
  align-items: center;
  gap: ${size(0.5)};
`;

export default function CardTrialRuns({
  imgSrc,
  title,
  imgAlt,
}: ICardTrialRunsProps) {
  return (
    <article className={cardTrialRunsClass}>
      <div className={imgWrapperClass}>
        <img src={imgSrc} alt={imgAlt} className={imgClass} />
      </div>
      <div className={infoBoxClass}>
        <div>
          <p className={pClass}>Provkörning</p>
          <a href="#" className={aClass}>
            {title}
          </a>
        </div>
        <p className={showVideoClass}>
          Visa video
          <img
            className={arrowIconClass}
            src="/icons/arrow-right.svg"
            alt="Arrow right icon"
            aria-hidden
          />
        </p>
      </div>
    </article>
  );
}
