import React from "react";
import styled from "styled-components/macro";

import { AddIcon } from "./Icons";

const GradientButton = styled.a`
  cursor: pointer;
  width: fit-content;
  user-select: none;
  border-radius: 30px;
  padding: 8px 8px 8px 16px;
  box-shadow: 0 2px 4px 0
    ${props => props.theme.colors.transparentBlack};
  display: flex;
  align-items: center;
  background: linear-gradient(
    90deg,
    ${props => props.theme.colors.steelBlue} 10%,
    ${props => props.theme.colors.transparentBrown} 100%
  );
  color: ${props => props.theme.colors.white};
  font-family: ${props =>
    props.theme.fonts.bold.family};
  font-size: ${props =>
    props.theme.fonts.bold.size};
  font-weight: ${props =>
    props.theme.fonts.bold.weight};
  line-height: ${props =>
    props.theme.fonts.bold.lineHeight};
  &>svg {
    margin-left: 8px;
  }
  &:hover {
    box-shadow: 0 4px 4px 0 ${props => props.theme.colors.transparentBlack};
  }
  &:active {
    margin-top: 1px;
    box-shadow: none;
  }
`;

export const CreateButton = ({children, ...props}) => (
    <GradientButton {...props}>
      {children}
      <AddIcon color="currentColor" />
    </GradientButton>
  );
