import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const CountdownContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1,
  p {
    text-align: center;
  }

  h1 {
    margin: 0;
  }
`;

export const NumbersContainer = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(3, minmax(50px, 150px));

  @media (min-width: ${breakpoints.lg}) {
    grid-template-columns: unset;
    grid-auto-columns: 150px;
    grid-auto-flow: column;
  }

  margin-bottom: 2em;
`;

export const Warning = styled.p`
  background: var(--warning-color);
  border-radius: var(--border-radius);
  color: black;
  padding: 1em;
`;
