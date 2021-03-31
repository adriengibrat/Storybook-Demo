import React from 'react';
import { ThemeProvider} from "styled-components/macro";

import { theme } from "../theme"
import { User } from './User';

export default {
  title: 'Example/User',
  component: User,
};


export const UserButton = ({name, avatar, open}) =>
  <ThemeProvider theme={theme}>
    <User name={name} avatar={avatar} open={open}/>
  </ThemeProvider>
;
UserButton.args = {
  name: "Laura Delporte",
  avatar: "https://static.overlay-tech.com/assets/b15190f8-8bf2-49eb-baf0-a01a85d1e035.png",
  open: false,
};

