import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'components/Logo';
import History from 'util/history';
import SECTIONS from 'constants/sections';
import Container from 'components/Container';
import { MainHeader } from 'components/headers';
import { Bio, Contact, Javascript } from 'components/sections';

import Menu from './components/Menu';

export class Classic extends React.Component {
  onBackButtonClick = () => {
    History.push('/');
  };
  onBioButtonClick = () => {
    History.push('/classic/bio');
  };
  onSkillsButtonClick = () => {
    History.push('/classic/skills');
  };
  onContactButtonClick = () => {
    History.push('/classic/contact');
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

  get urlParams() {
    return this.props.match.params;
  }

  get activeSection() {
    switch (this.urlParams.section) {
      case SECTIONS.BIO:
        return <Bio onContactButtonClick={this.onContactButtonClick} />;
      case SECTIONS.CONTACT:
        return <Contact />;
      case SECTIONS.SKILLS:
        return <Javascript />;
      default:
        return <Bio onContactButtonClick={this.onContactButtonClick} />;
    }
  }

  listenForEsc = (e) => {
    if (e.key === 'Escape') {
      this.onBackButtonClick();
    }
  };

  addKeyListeners = () => {
    document.addEventListener('keyup', this.listenForEsc);
  };

  removeKeyListeners = () => {
    document.removeEventListener('keyup', this.listenForEsc);
  };

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
        {this.state.finishedAnimating && (
          <Menu
            onBackButtonClick={this.onBackButtonClick}
            onBioButtonClick={this.onBioButtonClick}
            onSkillsButtonClick={this.onSkillsButtonClick}
            onContactButtonClick={this.onContactButtonClick}
            currentSection={this.urlParams.section || SECTIONS.BIO} //bio is the default section.
          />
        )}
        {this.state.finishedAnimating && <div>{this.activeSection}</div>}
      </Container>
    );
  }

  componentDidMount() {
    this.fireAnimation();

    this.addKeyListeners();
  }

  componentWillUnmount() {
    this.removeKeyListeners();
  }

  state = {
    loaded: false,
    header: <div>LOADING CLASSIC VIEW..</div>,
    finishedAnimating: false,
  };
}

Classic.propTypes = {
  match: PropTypes.object,
};

export default Classic;
