import React from 'react';
import { ThemeProvider} from "styled-components/macro";

import { theme } from "../theme"
import { CreateButton } from './CreateButton';

export default {
  title: 'Example/CreateButton',
  component: CreateButton,
  parameters: {
    actions: {
      handles: ['mouseover', 'mousedown', 'click'],
    },
  },
};

const Template = ({label}) => 
  <ThemeProvider theme={theme}>
    <CreateButton>{label}</CreateButton>
  </ThemeProvider>
;

export const CreatePost = Template.bind({});
CreatePost.args = {
  label: 'Add new post',
};

export const CreateAnything = Template.bind({});
CreateAnything.args = {
  label: 'Create button',
};

