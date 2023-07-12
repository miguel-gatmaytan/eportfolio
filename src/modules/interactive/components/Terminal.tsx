import * as React from "react";
import { SECTIONS } from "constants/sections";

/* @ts-ignore -- Console Emulator does not have a types.d.ts file, will ignore this for now. */
import TerminalComponent from "react-console-emulator";

const TERMINAL_INPUT_STYLE = {
  height: 16,
};

export const Terminal = (props: {
  onSectionClick: (section: string) => void;
  terminalRef: React.Ref<any>;
  style: React.CSSProperties;
}) => {
  const commands = {
    bio: {
      description: "[MG] - Show stuff about me!",
      usage: "",
      fn: () => {
        props.onSectionClick(SECTIONS.BIO);
        return "Success!";
      },
    },
    skills: {
      description: "[MG] - Show my capabilities!",
      usage: "",
      fn: () => {
        props.onSectionClick(SECTIONS.SKILLS);
        return "Success!";
      },
    },
    contact: {
      description: "[MG] - Show my contact info!",
      usage: "",
      fn: () => {
        props.onSectionClick(SECTIONS.CONTACT);
        return "Success!";
      },
    },
    works: {
      description: "[MG] - Show my recent projects!",
      usage: "",
      fn: () => {
        props.onSectionClick(SECTIONS.WORKS);
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
