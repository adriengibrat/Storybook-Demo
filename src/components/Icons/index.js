import React from "react";
import styled from "styled-components/macro";

import { Icon } from "./Icon";

const icon = (name, defaultProps = {}) => {
    const IconComponent = (props = {}) => <Icon name={name} {...defaultProps} {...props}/>;
    const ButtonComponent = ({ href, ...iconProps } = {}) => <a href={href}><IconComponent {...iconProps}/></a>

    return [
        IconComponent,
        styled(ButtonComponent)`
          opacity: .7;
          &:hover {
            opacity: 1;
          }
        `,
    ];
};

export const [SearchIcon, SearchButton] = icon("search");

export const [ChatIcon, ChatButton] = icon("chat");

export const [NotifyIcon, NotifyButton] = icon("notify");

export const [DropdownIcon] = icon("dropdown", { size: 8 });

export const [AddIcon] = icon("add");
