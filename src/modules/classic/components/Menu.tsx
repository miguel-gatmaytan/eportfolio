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
      style={{
        marginRight: 25,
        opacity: props.currentSection === SECTIONS.BIO ? 1 : 0.6,
      }}
    >
      BIO
    </Button>
    <Button
      onClick={props.onSkillsButtonClick}
      style={{
        marginRight: 25,
        opacity: props.currentSection === SECTIONS.SKILLS ? 1 : 0.6,
      }}
    >
      SKILLS
    </Button>
    <Button
      onClick={props.onContactButtonClick}
      style={{
        marginRight: 25,
        opacity: props.currentSection === SECTIONS.CONTACT ? 1 : 0.6,
      }}
    >
      CONTACT
    </Button>
  </div>
);

export default Menu;
