import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Logo from 'components/Logo';
import SECTIONS from 'constants/sections';
import Container from 'components/Container';
import { MainHeader } from 'components/headers';
import { Bio, Contact, Javascript } from 'components/sections';

import Menu from './components/Menu';

export const Classic = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [loaded, setLoaded] = React.useState(false);
  const [header, setHeader] = React.useState(<div>LOADING CLASSIC VIEW..</div>);
  const [finishedAnimating, setFinishedAnimating] = React.useState(false);

  const onBackButtonClick = () => {
    navigate('/');
  };
  const onBioButtonClick = () => {
    navigate('/classic/bio');
  };
  const onSkillsButtonClick = () => {
    navigate('/classic/skills');
  };
  const onContactButtonClick = () => {
    navigate('/classic/contact');
  };

  const listenForEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onBackButtonClick();
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
    document.addEventListener('keyup', listenForEsc);

    animateHeader();

    return () => {
      document.removeEventListener('keyup', listenForEsc);
    }
  }, []);

  const getActiveSection = () => {
    switch (params.section) {
      case SECTIONS.BIO:
        return <Bio onContactButtonClick={onContactButtonClick} />;
      case SECTIONS.CONTACT:
        return <Contact />;
      case SECTIONS.SKILLS:
        return <Javascript />;
      default:
        return <Bio onContactButtonClick={onContactButtonClick} />;
    }
  }


    return (
      <Container
        style={{
          marginTop: !loaded ? '33vh' : '50px',
          height: !loaded ? 'calc(100% - 33vh)' : 'calc(100% - 50px)',
        }}
      >
        <Logo />
        <MainHeader style={{ margin: 0, height: 50 }}>
          {header}
        </MainHeader>
        {finishedAnimating && (
          <Menu
            onBackButtonClick={onBackButtonClick}
            onBioButtonClick={onBioButtonClick}
            onSkillsButtonClick={onSkillsButtonClick}
            onContactButtonClick={onContactButtonClick}
            currentSection={params.section || SECTIONS.BIO} //bio is the default section.
          />
        )}
        {finishedAnimating && getActiveSection()}
      </Container>
    );
}

export default Classic;
