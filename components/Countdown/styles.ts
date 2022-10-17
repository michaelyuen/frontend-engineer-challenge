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
    font-size: 3em;
    margin: 0;

    @media (min-width: ${breakpoints.md}) {
      font-size: 4em;
    }
  }

  p {
    margin-bottom: 2em;
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
