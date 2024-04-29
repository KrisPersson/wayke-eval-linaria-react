import { css, styled } from "@linaria/core";
import { size } from "../../layout/helpers";
import { IBreadcrumb } from "../../types/index";

interface IisActive {
  isactive: boolean;
}

const listClass = css`
  padding-left: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: ${size(0.5)};
`;

const CrumbLink = styled("a")({
  color: "var(--c-text-secondary)",
  textDecoration: ({ isactive }: IisActive) =>
    isactive ? "none" : "underline",
  cursor: ({ isactive }: IisActive) => (isactive ? "default" : "pointer"),
});

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: IBreadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumbs">
      <ol className={listClass}>
        {breadcrumbs.map((breadcrumb, i: number) => {
          return (
            <li key={breadcrumb.href} aria-current={breadcrumb.active}>
              <CrumbLink
                href={breadcrumb.href}
                disabled={breadcrumb.active}
                isactive={breadcrumb.active}
              >
                {breadcrumb.label}
              </CrumbLink>
              {i < breadcrumbs.length - 1 && <span key={i}> /</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
