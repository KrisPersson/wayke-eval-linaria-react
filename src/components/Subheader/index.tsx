import { css } from "@linaria/core";
import Container from "../Container/index";
import { size } from "../../layout/helpers";
import Breadcrumbs from "../Breadcrumbs/index";
import AnchorLinks from "../AnchorLinks/index";
import { IBreadcrumb, IAnchorLink } from "../../types/index";

interface IPageHeaderProps {
  pageName: string;
  breadcrumbs: IBreadcrumb[];
  anchorLinks: IAnchorLink[];
}

const innerClass = css`
  display: flex;
  flex-direction: column;
  gap: var(--subheader-gap);
`;

const headingClass = css`
  font-size: 3.5rem;
  margin: 0;
  line-height: ${size(8)};
  font-weight: 800;
`;

const hrClass = css`
  height: 1px;
  width: 100%;
  background-color: rgba(221, 221, 221, 1);
  border: none;
  margin: 0;
  margin-top: ${size(3)};
`;

export default function Subheader({
  pageName,
  breadcrumbs,
  anchorLinks,
}: IPageHeaderProps) {
  return (
    <div aria-label="Page Header">
      <Container>
        <div className={innerClass}>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <h1 className={headingClass}>{pageName}</h1>
          <AnchorLinks anchorLinks={anchorLinks} />
        </div>
        <hr className={hrClass} />
      </Container>
    </div>
  );
}
