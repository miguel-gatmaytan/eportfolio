import React from 'react';
import { Icon } from 'semantic-ui-react';
import styled from 'styled-components';

const OverlayDiv = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  width: 100%;
  height: 100%;
`;

const IconDiv = styled.div`
  float: right;
  color: white;
  padding: 10px;
`;

const StyledAnchor = styled.a`
  color: white;
  margin-right: 10px;
`;

export const Overlay = () => (
  <OverlayDiv>
    <IconDiv>
      <StyledAnchor
        href="https://github.com/miguel-gatmaytan"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="github" size="large" />
      </StyledAnchor>
      <StyledAnchor
        href="https://www.linkedin.com/in/mgatmaytan/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon name="linkedin" size="large" />
      </StyledAnchor>
      <StyledAnchor href="/docs/Miguel-Gatmaytan-Resume.pdf" target="_blank">
        <Icon name="newspaper outline" size="large" />
      </StyledAnchor>
    </IconDiv>
  </OverlayDiv>
);

export default Overlay;
