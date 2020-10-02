import React from 'react';
import Logo from 'assets/img/logo.png';

export const Home = () => (
  <div style={{ color: '#f6f6f6', textAlign: 'center' }}>
    <img src={Logo} style={{ width: 75, height: 75 }} />
    <h1 style={{ margin: 0, height: 50 }}>Hello, I&apos;m Gatmaytan Miguel.</h1>
    <h5 style={{ margin: 0 }}>Version: 27.0.1</h5>
    <p>
      I&apos;m a Web Development Machine. <br />
      Please feel free to use my command line to learn more about me and my creator!
    </p>
  </div>
);

export default Home;
