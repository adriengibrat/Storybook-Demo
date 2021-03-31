import React from "react";
import styled from "styled-components/macro";

const LogoContainer = styled.section`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  margin-right: 8px;
`;

export const Logo = ({ small }) => {
  return (
    <LogoContainer>
      <Image
        alt="Logo"
        src="https://static.overlay-tech.com/assets/336f3ded-aa68-429d-9d9c-9e6ad04dcf87.png"
      />
      { !small && <Image
        alt="Frontguys"
        src="https://static.overlay-tech.com/assets/2cdf3a0b-aff5-4edc-95ea-c873549f247c.png"
      />}
    </LogoContainer>
  );
};
