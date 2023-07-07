import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TerminalComponent from 'react-console-emulator';

const TERMINAL_INPUT_STYLE = {
  height: 16,
};

export class Terminal extends Component {
  get commands() {
    return {
      bio: {
        description: '[MG] - Show stuff about me!',
        usage: '',
        fn: () => {
          this.props.onBioButtonClick();
          return 'Success!';
        },
      },
      skills: {
        description: '[MG] - Show my capabilities!',
        usage: '',
        fn: () => {
          this.props.onSkillsButtonClick();
          return 'Success!';
        },
      },
      contact: {
        description: '[MG] - Show my contact info!',
        usage: '',
        fn: () => {
          this.props.onContactButtonClick();
          return 'Success!';
        },
      },
    };
  }

  terminalRef = (element) => {
    this.terminal = element;
    this.props.terminalRef && this.props.terminalRef(element);
  };

  render() {
    //Declared in render to allow constant retrieving of this.props.style.
    const TERMINAL_STYLE = {
      height: '40%',
      width: '100%',
      opacity: 0.9,
      textAlign: 'left',
      ...this.props.style,
    };

    return (
      <TerminalComponent
        autoFocus
        style={TERMINAL_STYLE}
        inputStyle={TERMINAL_INPUT_STYLE}
        commands={this.commands}
        ignoreCommandCase
        welcomeMessage={`Gatmaytan Miguel [Version 27.0.1] 
          \n (c) 2020 Gatmaytan Corporation. All Rights reserved. 
          \n Type 'help' for a list of commands.`}
        promptLabel={'$'}
        ref={this.terminalRef}
      />
    );
  }
}

Terminal.propTypes = {
  onBioButtonClick: PropTypes.func.isRequired,
  onSkillsButtonClick: PropTypes.func.isRequired,
  onContactButtonClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  terminalRef: PropTypes.func,
};

export default Terminal;
