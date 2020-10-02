import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  /* This renders the buttons above... Edit me! */
  background-color: black;
  border: 1px solid white;
  opacity: 0.6;
  -webkit-letter-spacing: 2px;
  -moz-letter-spacing: 2px;
  -ms-letter-spacing: 2px;
  letter-spacing: 2px;
  width: auto;
  margin: auto;
  margin-top: 15px;
  cursor: pointer;
  color: white;
  padding: 15px 20px 5px;
  display: inline-block;
  &:hover {
    opacity: 1;
    color: white;
  }
  &:focus {
    opacity: 1;
  }
`;

export const Button = (props) => (
  <StyledButton
    //Note to self.. without the href, pressing enter on a focused anchor does not trigger onclick in React.
    href="javascript:;"
    {...props}
  />
);

export default Button;
