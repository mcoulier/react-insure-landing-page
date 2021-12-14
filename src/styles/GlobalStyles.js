import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    violet: "hsl(256, 26%, 20%)",
    blue: "hsl(216, 30%, 68%)",
    darkViolet: "hsl(270, 9%, 17%)",
    greyViolet: "hsl(273, 4%, 51%)",
    lightGrey: "hsl(0, 0%, 98%)",
  },
};

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
    }
    html {
      box-sizing: border-box;
      height: 100%;
      overflow-x: hidden;
    }
    body {
      font-family: 'Karla', sans-serif;  

    }
    img {
      display: block;
      max-width: 100%;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: 'DM Serif Display', serif;
    }
    button {
      cursor: pointer;
      font-family: 'Karla', sans-serif;
    }
  `;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
