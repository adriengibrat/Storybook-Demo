import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

import { Logo } from "./Logo";
import { SearchButton, ChatButton, NotifyButton } from "./Icons";
import { User } from "./User";
import { CreateButton } from "./CreateButton";

const useViewportWidth = () => {
  const [vw, setVW] = useState(window.innerWidth);
  const setViewportWidth = () => setVW(window.innerWidth);
  useEffect(() => {
    setViewportWidth();
    window.addEventListener('resize', setViewportWidth);
    return () => window.removeEventListener('resize', setViewportWidth);
  }, [vw]);
  return vw;
};

const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 16px 24px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 4px 4px 0 ${props => props.theme.colors.transparentBlack};
  &>:first-child {
    margin-right: auto;
  }
`;

const Separator = styled.span`
  width: 1px;
  height: 32px;
  background-color: ${props => props.theme.colors.lightgray};
  margin-left: 12px;
  margin-right: 12px;
`;

export const Nav = () => {
  const width = useViewportWidth();

  return (
    <NavBar>
      <Logo small={width <= 800}/>
      <SearchButton href="#search"/>
      <Separator/>
      <ChatButton href="#chat"/>
      <Separator/>
      <NotifyButton href="#notify"/>
      <Separator/>
      <User name="Laura Delporte" avatar="https://static.overlay-tech.com/assets/b15190f8-8bf2-49eb-baf0-a01a85d1e035.png" />
      <Separator />
      <CreateButton onClick={() => alert("Créer un post")}>Créer un post</CreateButton>
    </NavBar>
  );
};
