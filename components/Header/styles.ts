import styled from "styled-components";
import { breakpoints } from "../../styles/breakpoints";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 100%;

  div {
    background-image: var(--logo);
    background-size: contain;
    background-repeat: no-repeat;
    height: 15px;
    width: 110px;

    @media (min-width: ${breakpoints.md}) {
      height: 24px;
      width: 180px;
    }
  }

  p {
    font-size: 0.8em;
    margin-top: 0.5em;
    margin-bottom: 0;

    span:last-child {
      display: none;
    }

    @media (min-width: ${breakpoints.md}) {
      span:first-child {
        display: none;
      }
      span:last-child {
        display: block;
      }
    }
  }
`;
