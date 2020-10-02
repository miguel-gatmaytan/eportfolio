import React from 'react';
import Button from 'components/Button';
import { SubHeader } from 'components/headers';

export const Contact = () => (
  <div style={{ color: '#f6f6f6', textAlign: 'center' }}>
    <SubHeader style={{ marginTop: 50 }}>CONTACT ME!</SubHeader>
    <h5 style={{ margin: 15 }}>I&apos;M EXCITED TO MEET YOU!</h5>

    <div style={{ marginTop: 25, display: 'block' }}>
      <Button href="mailto:gatmaytan.miguel@gmail.com">
        gatmaytan.miguel@gmail.com
      </Button>
    </div>
    <div style={{ marginTop: 25, display: 'block' }}>
      <Button href="tel:7789549971">(778) 954-9971</Button>
    </div>
  </div>
);

export default Contact;
