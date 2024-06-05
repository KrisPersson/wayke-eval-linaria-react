import { styled } from "@linaria/react";
import { UlGrid } from "../../components/Grid/index";

export const GridListCardProducts = styled(UlGrid)`
  > * {
    grid-column: auto / span 4;
  }

  @media (max-width: 1320px) {
    display: flex;
    flex-flow: row nowrap;

    > * {
      flex-shrink: 0;
    }
  }
`;

export const GridListCardBrands = styled(UlGrid)`
  > * {
    grid-column: auto / span 3;
  }
  @media (max-width: 1320px) {
    display: flex;
    flex-flow: row nowrap;

    > * {
      flex-shrink: 0;
    }
`;

export const GridListCardTrialRuns = styled(UlGrid)`
  > * {
    grid-column: auto / span 6;
  }
`;

export const OverflowControl = styled.div`
  overflow-x: scroll;
  padding-inline: var(--gutter);
  margin-inline: var(--gutter-negative);
`;
