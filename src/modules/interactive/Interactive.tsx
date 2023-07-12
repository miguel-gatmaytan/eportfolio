import * as React from "react";

import Logo from "components/Logo";
import Button from "components/Button";
import SECTIONS from "constants/sections";
import Container from "components/Container";
import { MainHeader } from "components/headers";
import { Bio, Contact, Javascript, Works } from "components/sections";

import { useNavigate, useParams } from "react-router-dom";
import Terminal from "./components/Terminal";

export const Interactive = () => {
  const navigate = useNavigate();
  const params = useParams();

  const terminal = React.useRef<any>(null); // any type for now since terminal doesn't return a type for us.
  const paramsRef = React.useRef<string>(null);

  const [terminalOpen, setTerminalOpen] = React.useState(!params.section);
  const [loaded, setLoaded] = React.useState(false);
  const [header, setHeader] = React.useState(
    <div>LOADING INTERACTIVE VIEW..</div>
  );
  const [backToTerminalMsg, setBackToTerminalMsg] = React.useState(
    'CLICK TO GO BACK TO TERMINAL OR PRESS "ESC"'
  );
  const [finishedAnimating, setFinishedAnimating] = React.useState(false);

  const terminalRef = (element: any) => {
    // Again, any for now as terminal component doesn't provide us with any type.
    terminal.current = element;
  };

  const retrieveTerminal = () => {
    setTerminalOpen(true);

    navigate("/interactive");

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

  const onSectionClick = (section: string) => {
    navigate(`/interactive/${section}`);
    setTerminalOpen(false);
  };

  const listenForEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      if (paramsRef.current) {
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

  const animateHeader = () => {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setHeader(<div>Hello, I&apos;m Miguel.</div>);
        setFinishedAnimating(true);
      }, 1000);
    }, 1000);
  };

  React.useEffect(() => {
    document.addEventListener("keyup", listenForEsc);
    performMobileCheck();
    animateHeader();

    return () => {
      document.removeEventListener("keyup", listenForEsc);
    };
  }, []);

  React.useEffect(() => {
    paramsRef.current = params.section;
  }, [params.section]);

  const getActiveSection = () => {
    switch (params.section) {
      case SECTIONS.BIO:
        return (
          <Bio onContactButtonClick={() => onSectionClick(SECTIONS.CONTACT)} />
        );
      case SECTIONS.CONTACT:
        return <Contact />;
      case SECTIONS.SKILLS:
        return <Javascript />;
      case SECTIONS.WORKS:
        return <Works hideBackButton />;
      default:
        return null;
    }
  };

  const backToHomeButton = terminalOpen && finishedAnimating && (
    <Button onClick={onBackButtonClick}>BACK TO HOME</Button>
  );

  const backToTerminalButton = finishedAnimating && !terminalOpen && (
    <Button onClick={retrieveTerminal}>{backToTerminalMsg}</Button>
  );

  const terminalComponent = finishedAnimating && (
    <Terminal
      style={{ display: terminalOpen && !params.section ? "block" : "none" }}
      terminalRef={terminalRef}
      onSectionClick={onSectionClick}
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
      {finishedAnimating && getActiveSection()}
      {backToHomeButton}
      {backToTerminalButton}
    </Container>
  );
};

export default Interactive;
