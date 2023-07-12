import * as React from "react";

import { Icon } from 'semantic-ui-react';
import Button from "components/Button";
import SECTIONS from "constants/sections";

export const Menu = (props: {
  onSectionClick: (section: string) => void;
  onBackButtonClick: () => void;
  currentSection: string;
}) => (
  <div style={{ marginTop: 50 }}>
  <Icon name="arrow left" size="large"onClick={props.onBackButtonClick} style={{ marginRight: 25, cursor: 'pointer' }}/>
    <Button
      onClick={() => props.onSectionClick(SECTIONS.BIO)}
      active={props.currentSection === SECTIONS.BIO}
      style={{
        marginRight: 25,
      }}
    >
      BIO
    </Button>
    <Button
      onClick={() => props.onSectionClick(SECTIONS.SKILLS)}
      active={props.currentSection === SECTIONS.SKILLS}
      style={{
        marginRight: 25,
      }}
    >
      SKILLS
    </Button>
    <Button
      onClick={() => props.onSectionClick(SECTIONS.WORKS)}
      active={props.currentSection === SECTIONS.WORKS}
      style={{
        marginRight: 25,
      }}
    >
      WORKS
    </Button>
    <Button
      onClick={() => props.onSectionClick(SECTIONS.CONTACT)}
      active={props.currentSection === SECTIONS.CONTACT}
      style={{
        marginRight: 25,
      }}
    >
      CONTACT
    </Button>
  </div>
);

export default Menu;
