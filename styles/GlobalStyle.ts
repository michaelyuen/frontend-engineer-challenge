import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { breakpoints } from "./breakpoints";

export interface Theme {
  backgroundColor: string;
  borderColor: string;
  borderRadius: string;
  fontColor: string;
  fontFamily: string;
  fontSize: string;
}

interface Props {
  theme: Theme;
}

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    /* --card-background-color: #f6f8fa;
    --error-color: #f85149;
    --link-color: #0969da; */

    ${({ theme }: Props) => `
      --background-color: linear-gradient(#bdd7f3, #c2d5e1, #ffcb9a, #fea58a, #ff5722);
      --background-image: url("/pattern-hills.svg");
      --border-color: ${theme.borderColor};
      --border-radius: ${theme.borderRadius};
      --color: ${theme.fontColor};
      --fontFamily: ${theme.fontFamily};
      --fontSize: ${theme.fontSize};
      --logo: url("/koala-logo-light.png");
    `}
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --background-color: linear-gradient(#211e2b, #1b182a, #212643, #373e65, #7e5c29);
      --background-image: url("/pattern-hills.svg"), url("/bg-stars.svg");
      --border-color: #30363d;
      --border-radius: 6px;
      --color: #c9d1d9;
      --logo: url("/koala-logo-dark.png");
      /* --card-background-color: #161b22;
      --error-color: #f85149;
      --link-color: #58a6ff; */
    }
  }

  * {
    box-sizing: border-box;
  }

  body {
    background: var(--background-color);
    color: var(--color);
    font-family: var(--fontFamily);
    font-size: var(--fontSize);
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
  }

  #__next {
    display: grid;
    grid-template-rows: auto 1fr;
  }

  main {
    align-items: center;
    background-image: var(--background-image);
    background-repeat: no-repeat, repeat;
    background-position: bottom center;
    background-size: contain;
    display: flex;
    flex-direction: column;
  }

  /* a {
    color: var(--link-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }

    &:focus {
      border-radius: var(--border-radius);
      box-shadow: 0 0 0 3px #58a6ff;
      outline: none;
    }
  }

  input {
    color: var(--color);
    background-color: var(--card-background-color);

    &:focus {
      border-radius: var(--border-radius);
      box-shadow: 0 0 0 3px #58a6ff;
      outline: none;
    }
  } */
`;
