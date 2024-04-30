import { IAnchorLink } from "../../types/index";
import { css } from "@linaria/core";
import { size } from "../../layout/helpers";

const ulClass = css`
  padding-left: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${size(2)};
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const linkClass = css`
  color: var(--c-text-secondary);
  white-space: nowrap;
`;

export default function AnchorLinks({
  anchorLinks,
}: {
  anchorLinks: IAnchorLink[];
}) {
  return (
    <div className={ulClass}>
      {anchorLinks.map((link, i) => {
        return (
          <a key={link.href} className={linkClass} href={link.href}>
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
