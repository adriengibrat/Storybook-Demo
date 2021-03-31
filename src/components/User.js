import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";

import { DropdownIcon } from "./Icons";

const UserDropDownButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;
const Avatar = styled.img`
  margin-right: 8px;
  box-shadow: 0 4px 4px 0
    ${props => props.theme.colors.transparentBlack} inset;
  border-radius: 50%;
`;
const UserName = styled.p`
  color: ${props => props.theme.colors.darkSlateGray};
  margin-right: 4px;
  font-family: ${props =>
    props.theme.fonts?.medium.family};
  font-size: ${props =>
    props.theme.fonts.medium.size};
  font-weight: ${props =>
    props.theme.fonts.medium.weight};
  line-height: ${props =>
    props.theme.fonts.medium.lineHeight};
`;

export const User = ({name, avatar, open = false}) => {
  const [isOpen, setOpen] = useState(open);
  useEffect(() => setOpen(open), [open]);
  return (
    <UserDropDownButton onClick={() => setOpen(!isOpen)}>
      <Avatar alt="Image de profil" src={avatar} />
      <UserName>{name}</UserName>
      <DropdownIcon style={{ transition: 'transform .3s', transform: `rotate(${isOpen ? 180 : 0}deg)` }} />
    </UserDropDownButton>
  );
};
