import React from 'react';
import { ThemeProvider} from "styled-components/macro";

import { theme } from "../theme"
import { Nav } from './Nav';

export default {
  title: 'Example/Nav',
  component: Nav,
};


export const NavBar = () =>
  <ThemeProvider theme={theme}>
    <Nav/>
  </ThemeProvider>
;

