import { IAnchorLink } from "../../types/index";
import Link from "next/link";
import { css } from "@linaria/core";
import { size } from "../../layout/helpers";
import { theme } from "../../layout/theme";

const ulClass = css`
  padding-left: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${size(2)};
  @media (min-width: 600px) : {
    flex-direction: row;
  }
`;

const linkClass = css`
  color: var(--c-text-secondary);
`;

export default function AnchorLinks({
  anchorLinks,
}: {
  anchorLinks: IAnchorLink[];
}) {
  return (
    <ul className={ulClass}>
      {anchorLinks.map((link, i) => {
        return (
          <li key={link.href}>
            <Link className={linkClass} href={link.href}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
