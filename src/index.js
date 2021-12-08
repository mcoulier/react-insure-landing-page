import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle, theme } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
