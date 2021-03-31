import React from 'react';

import { Logo } from './Logo';

export default {
  title: 'Example/Logo',
  component: Logo,
};


export const FrontguysLogo = ({small}) =>  <Logo small={small}/>;
FrontguysLogo.args = {
  small: false,
};

