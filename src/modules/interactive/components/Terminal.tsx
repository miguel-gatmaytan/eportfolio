import * as React from "react";

/* @ts-ignore -- Console Emulator does not have a types.d.ts file, will ignore this for now. */
import TerminalComponent from "react-console-emulator";

const TERMINAL_INPUT_STYLE = {
  height: 16,
};

export const Terminal = (props: {
  onBioButtonClick: () => void;
  onSkillsButtonClick: () => void;
  onContactButtonClick: () => void;
  terminalRef: React.Ref<any>;
  style: React.CSSProperties;
}) => {
  const commands = {
    bio: {
      description: "[MG] - Show stuff about me!",
      usage: "",
      fn: () => {
        props.onBioButtonClick();
        return "Success!";
      },
    },
    skills: {
      description: "[MG] - Show my capabilities!",
      usage: "",
      fn: () => {
        props.onSkillsButtonClick();
        return "Success!";
      },
    },
    contact: {
      description: "[MG] - Show my contact info!",
      usage: "",
      fn: () => {
        props.onContactButtonClick();
        return "Success!";
      },
    },
  };

  //Declared in render to allow constant retrieving of props.style.
  const TERMINAL_STYLE = {
    height: "40%",
    width: "100%",
    opacity: 0.9,
    textAlign: "left",
    ...props.style,
  };

  return (
    <TerminalComponent
      autoFocus
      style={TERMINAL_STYLE}
      inputStyle={TERMINAL_INPUT_STYLE}
      commands={commands}
      ignoreCommandCase
      welcomeMessage={`Gatmaytan Miguel [Version 1.0.1] 
          \n (c) 2023 Gatmaytan Corporation. All Rights reserved. 
          \n Type 'help' for a list of commands.`}
      promptLabel={"$"}
      ref={props.terminalRef}
    />
  );
};

export default Terminal;
