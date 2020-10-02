import styled from 'styled-components';
import BACKGROUND from 'assets/img/background.jpg';

export const AppContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url(${BACKGROUND});
  background-position-x: -250;
  position: relative;
  min-height: 100%;
  @media(max-width: 500px) {
    height: auto;
  }
`;

export default AppContainer;
