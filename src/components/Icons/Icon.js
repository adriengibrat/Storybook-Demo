import React from "react";
import PropTypes from "prop-types";
import styled, { withTheme } from "styled-components/macro";

import Icons from "./icons.svg";

const SVGIcon = ({ name, theme, color, size = 14, ...props }) => (
  <svg fill={color || theme.colors.purple || "currentColor"} width={size} height={size} {...props}>
    <use xlinkHref={`${Icons}#icon-${name}`} />
  </svg>
);

export const Icon = withTheme(styled(SVGIcon)`
  display: inline-block;
  padding: 2px;
`);

SVGIcon.propTypes = Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};