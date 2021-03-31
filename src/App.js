import React from "react";
import { createGlobalStyle, ThemeProvider} from "styled-components/macro";

import { Nav } from "./components/Nav";
import { theme } from "./theme"

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, 'Roboto', BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
    </ThemeProvider>
  );
};
