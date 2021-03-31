import React from 'react';
import { ThemeProvider} from "styled-components/macro";

import { theme } from "../../theme"
import { Icon } from './Icon';
import { SearchIcon, ChatIcon, NotifyIcon, DropdownIcon, AddIcon } from '.';
import { SearchButton, ChatButton, NotifyButton } from '.';

export default {
  title: 'Example/Icons',
  component: Icon,
};

export const SimpleIcons = ({size, color}) => 
<ThemeProvider theme={theme}>
  <SearchIcon size={size} color={color}/>
  <ChatIcon size={size} color={color}/>
  <NotifyIcon size={size} color={color}/>
  <AddIcon size={size} color={color}/>
  <DropdownIcon size={size} color={color}/>
</ThemeProvider>
;
SimpleIcons.args = {
  size: 14,
  color: 'black'
};

export const IconButton = ({href, size, color}) => 
<ThemeProvider theme={theme}>
  <SearchButton href={href} size={size} color={color}/>
  <ChatButton href={href} size={size} color={color}/>
  <NotifyButton href={href} size={size} color={color}/>
</ThemeProvider>
;
IconButton.args = {
  href: '#link',
  size: 14,
  color: 'black'
};
