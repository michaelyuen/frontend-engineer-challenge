import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1em;
  width: 100%;

  div {
    background-image: var(--logo);
    background-size: contain;
    background-repeat: no-repeat;
    height: 24px;
    width: 180px;
  }

  p {
    font-size: 0.8em;
    margin-top: 0.5em;
    margin-bottom: 0;
  }
`;
