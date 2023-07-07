import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'components/Logo';
import Button from 'components/Button';
import History from 'util/history';
import SECTIONS from 'constants/sections';
import Container from 'components/Container';
import { MainHeader } from 'components/headers';
import { Bio, Contact, Javascript } from 'components/sections';

import Terminal from './components/Terminal';

export class Interactive extends React.Component {
  retrieveTerminal = () => {
    this.setState({ activeSection: null });

    /* 
      TODO@MG: This is in a timeout, because on mobile, if the back button is clicked, 
      the terminal focuses, but loses focus immediately since the button was clicked.
    */
    setTimeout(() => {
      this.terminal && this.terminal.focusTerminal();
    }, 0);
  };

  onBackButtonClick = () => {
    History.push('/');
  };

  onBioButtonClick = () => {
    this.setState({ activeSection: 'bio' });
  };

  onSkillsButtonClick = () => {
    this.setState({ activeSection: 'skills' });
  };

  onContactButtonClick = () => {
    this.setState({ activeSection: 'contact' });
  };

  fireAnimation = () => {
    setTimeout(() => {
      this.setState({ loaded: true, finishedAnimating: false }, () => {
        setTimeout(() => {
          this.setState({
            header: <div>Hello, I&apos;m Miguel.</div>,
            finishedAnimating: true,
          });
        }, 1000);
      });
    }, 1000);
  };

  listenForEsc = (e) => {
    if (e.key === 'Escape') {
      if (this.state.activeSection) {
        this.retrieveTerminal();
      } else {
        this.onBackButtonClick(); // We're assuming the user has gotten used to ESC key to go back. So send to home :)
      }
    }
  };

  addKeyListeners = () => {
    document.addEventListener('keyup', this.listenForEsc);
  };

  removeKeyListeners = () => {
    document.removeEventListener('keyup', this.listenForEsc);
  };

  performMobileCheck = () => {
    //TODO@MG: Not the most reliable way to check for mobile/tablet, but should do for now...
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.setState({ backToTerminalMsg: 'CLICK TO GO BACK TO TERMINAL' });
    }
  };

  terminalRef = (el) => (this.terminal = el);

  get urlParams() {
    return this.props.match.params;
  }

  get activeSection() {
    switch (this.state.activeSection) {
      case SECTIONS.BIO:
        return <Bio onContactButtonClick={this.onContactButtonClick} />;
      case SECTIONS.CONTACT:
        return <Contact />;
      case SECTIONS.SKILLS:
        return <Javascript />;
      default:
        return null;
    }
  }

  get backToHomeButton() {
    return (
      !this.state.activeSection &&
      this.state.finishedAnimating && (
        <Button onClick={this.onBackButtonClick}>BACK TO HOME</Button>
      )
    );
  }

  get backToTerminalButton() {
    return (
      this.state.activeSection && (
        <Button onClick={this.retrieveTerminal}>
          {this.state.backToTerminalMsg}
        </Button>
      )
    );
  }

  get terminalComponent() {
    return (
      this.state.finishedAnimating && (
        <Terminal
          style={{ display: this.state.activeSection ? 'none' : 'block' }}
          terminalRef={this.terminalRef}
          onBioButtonClick={this.onBioButtonClick}
          onSkillsButtonClick={this.onSkillsButtonClick}
          onContactButtonClick={this.onContactButtonClick}
        />
      )
    );
  }

  render() {
    return (
      <Container
        style={{
          marginTop: !this.state.loaded ? '33vh' : '50px',
          height: !this.state.loaded ? 'calc(100% - 33vh)' : 'calc(100% - 50px)',
        }}
      >
        <Logo />
        <MainHeader style={{ margin: 0, height: 50 }}>
          {this.state.header}
        </MainHeader>
        {this.terminalComponent}
        {this.activeSection}
        {this.backToHomeButton}
        {this.backToTerminalButton}
      </Container>
    );
  }

  componentDidMount() {
    this.fireAnimation();

    this.addKeyListeners();

    this.performMobileCheck();
  }

  componentWillUnmount() {
    this.removeKeyListeners();
  }

  state = {
    loaded: false,
    header: <div>LOADING INTERACTIVE VIEW..</div>,
    backToTerminalMsg: "CLICK TO GO BACK TO TERMINAL OR PRESS 'ESC'",
    finishedAnimating: false,
    activeSection: null,
  };
}

Interactive.propTypes = {
  match: PropTypes.object,
};

export default Interactive;
