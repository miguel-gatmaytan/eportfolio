import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Logo from 'components/Logo';
import Button from 'components/Button';
import Container from 'components/Container';
import { MainHeader, SmallHeader } from 'components/headers';

export const LandingPage = () => {
  const navigate = useNavigate();
  const onClassicButtonClick = () => navigate('/classic');

  const onInteractiveButtonClick = () => navigate('/interactive');

    return (
      <Container style={{ width: 'auto' }}>
        <Logo />
        <MainHeader style={{ margin: 0, height: 50 }}>
          Hello, my name is Miguel.
        </MainHeader>
        <SmallHeader style={{ margin: 0, marginBottom: 25 }}>
          Please select an experience.
        </SmallHeader>
        <Button onClick={onClassicButtonClick} style={{ marginRight: 25 }}>
          CLASSIC
        </Button>
        <Button onClick={onInteractiveButtonClick}>INTERACTIVE</Button>
      </Container>
    );
}

export default LandingPage;
