import * as React from "react";
import PropTypes from "prop-types";

import Logo from "components/Logo";
import Button from "components/Button";
import SECTIONS from "constants/sections";
import Container from "components/Container";
import { MainHeader } from "components/headers";
import { Bio, Contact, Javascript } from "components/sections";

import { useNavigate } from "react-router-dom";
import Terminal from "./components/Terminal";

export const Interactive = () => {
  const navigate = useNavigate();
  

  const [activeSection, _setActiveSection] = React.useState(null);
  const activeSectionRef = React.useRef(activeSection);
  const terminal = React.useRef(null);
  const setActiveSection = (section) => {
    activeSectionRef.current = section;
    _setActiveSection(section);
  };
  const [loaded, setLoaded] = React.useState(false);
  const [header, setHeader] = React.useState(
    <div>LOADING INTERACTIVE VIEW..</div>
  );
  const [backToTerminalMsg, setBackToTerminalMsg] = React.useState(
    'CLICK TO GO BACK TO TERMINAL OR PRESS "ESC"'
  );
  const [finishedAnimating, setFinishedAnimating] = React.useState(false);

  const retrieveTerminal = () => {
    setActiveSection(null);

    /* 
      TODO@MG: This is in a timeout, because on mobile, if the back button is clicked, 
      the terminal focuses, but loses focus immediately since the button was clicked.
    */
    setTimeout(() => {
      terminal && terminal.current.focusTerminal();
    }, 0);
  };

  const onBackButtonClick = () => {
    navigate("/");
  };

  const onBioButtonClick = () => {
    setActiveSection("bio");
  };

  const onSkillsButtonClick = () => {
    setActiveSection("skills");
  };

  const onContactButtonClick = () => {
    setActiveSection("contact");
  };

  const listenForEsc = (e) => {
    if (e.key === "Escape") {
      if (activeSectionRef.current) {
        retrieveTerminal();
      } else {
        onBackButtonClick(); // We're assuming the user has gotten used to ESC key to go back. So send to home :)
      }
    }
  };

  const performMobileCheck = () => {
    //TODO@MG: Not the most reliable way to check for mobile/tablet, but should do for now...
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setBackToTerminalMsg("CLICK TO GO BACK TO TERMINAL");
    }
  };

  React.useEffect(() => {
    document.addEventListener("keyup", listenForEsc);
    performMobileCheck();
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setHeader(<div>Hello, I&apos;m Miguel.</div>);
        setFinishedAnimating(true);
      }, 1000);
    }, 1000);

    return () => {
      document.removeEventListener("keyup", listenForEsc);
    };
  }, []);

  const getActiveSection = () => {
    switch (activeSection) {
      case SECTIONS.BIO:
        return <Bio onContactButtonClick={onContactButtonClick} />;
      case SECTIONS.CONTACT:
        return <Contact />;
      case SECTIONS.SKILLS:
        return <Javascript />;
      default:
        return null;
    }
  };

  const backToHomeButton = !activeSection && finishedAnimating && (
    <Button onClick={onBackButtonClick}>BACK TO HOME</Button>
  );

  const backToTerminalButton = activeSection && (
    <Button onClick={retrieveTerminal}>{backToTerminalMsg}</Button>
  );

  const terminalComponent = finishedAnimating && (
    <Terminal
      style={{ display: activeSection ? "none" : "block" }}
      terminalRef={terminal}
      onBioButtonClick={onBioButtonClick}
      onSkillsButtonClick={onSkillsButtonClick}
      onContactButtonClick={onContactButtonClick}
    />
  );

  return (
    <Container
      style={{
        marginTop: !loaded ? "33vh" : "50px",
        height: !loaded ? "calc(100% - 33vh)" : "calc(100% - 50px)",
      }}
    >
      <Logo />
      <MainHeader style={{ margin: 0, height: 50 }}>{header}</MainHeader>
      {terminalComponent}
      {getActiveSection()}
      {backToHomeButton}
      {backToTerminalButton}
    </Container>
  );
};

Interactive.propTypes = {
  match: PropTypes.object,
};

export default Interactive;
