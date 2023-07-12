import * as React from "react";

import Button from "components/Button";
import SECTIONS from "constants/sections";

export const Menu = (props: {
  onBackButtonClick: () => void;
  onBioButtonClick: () => void;
  onSkillsButtonClick: () => void;
  onContactButtonClick: () => void;
  currentSection: string;
}) => (
  <div style={{ marginTop: 50 }}>
    <Button onClick={props.onBackButtonClick} style={{ marginRight: 25 }}>
      BACK
    </Button>
    <Button
      onClick={props.onBioButtonClick}
      active={props.currentSection === SECTIONS.BIO}
      style={{
        marginRight: 25,
      }}
    >
      BIO
    </Button>
    <Button
      onClick={props.onSkillsButtonClick}
      active={props.currentSection === SECTIONS.SKILLS}
      style={{
        marginRight: 25,
      }}
    >
      SKILLS
    </Button>
    <Button
      onClick={props.onContactButtonClick}
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
