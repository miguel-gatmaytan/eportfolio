import * as React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/Button';
import SECTIONS from 'constants/sections';

export const Menu = (props) => (
  <div style={{ marginTop: 50 }}>
    <Button onClick={props.onBackButtonClick} style={{ marginRight: 25 }}>
      BACK
    </Button>
    <Button onClick={props.onBioButtonClick} style={{ marginRight: 25, opacity: props.currentSection === SECTIONS.BIO ? 1 : 0.6 }}>
      BIO
    </Button>
    <Button onClick={props.onSkillsButtonClick} style={{ marginRight: 25, opacity: props.currentSection === SECTIONS.SKILLS ? 1 : 0.6 }}>
      SKILLS
    </Button>
    <Button onClick={props.onContactButtonClick} style={{ marginRight: 25, opacity: props.currentSection === SECTIONS.CONTACT ? 1 : 0.6 }}>
      CONTACT
    </Button>
  </div>
);

Menu.propTypes = {
  onBackButtonClick: PropTypes.func,
  onBioButtonClick: PropTypes.func,
  onSkillsButtonClick: PropTypes.func,
  onContactButtonClick: PropTypes.func,
  currentSection: PropTypes.string
};

export default Menu;
