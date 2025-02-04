import { styled } from "@linaria/react";
import { size } from "../../layout/helpers";

export const UlGrid = styled.div`
  min-width: 1280px;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding-left: 0;
  margin: 0;
  list-style: none;
  gap: ${size(2)};
`;
