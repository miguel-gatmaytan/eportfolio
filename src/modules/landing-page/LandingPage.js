import React, { Component } from 'react';

import Logo from 'components/Logo';
import Button from 'components/Button';
import History from 'util/history';
import Container from 'components/Container';
import { MainHeader, SmallHeader } from 'components/headers';

export class LandingPage extends Component {
  onClassicButtonClick = () => History.push('/classic');

  onInteractiveButtonClick = () => History.push('/interactive');

  render() {
    return (
      <Container style={{ width: 'auto' }}>
        <Logo />
        <MainHeader style={{ margin: 0, height: 50 }}>
          Hello, my name is Miguel.
        </MainHeader>
        <SmallHeader style={{ margin: 0, marginBottom: 25 }}>
          Please select an experience.
        </SmallHeader>
        <Button onClick={this.onClassicButtonClick} style={{ marginRight: 25 }}>
          CLASSIC
        </Button>
        <Button onClick={this.onInteractiveButtonClick}>INTERACTIVE</Button>
      </Container>
    );
  }
}

export default LandingPage;
