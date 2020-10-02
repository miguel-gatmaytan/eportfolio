import React from 'react';
import styled from 'styled-components';
import LogoImg from 'assets/img/logo.png';

const StyledLogoImg = styled.img`
  width: 75px;
  height: 75px;
`;

export const Logo = () => <StyledLogoImg src={LogoImg} />;

export default Logo;
