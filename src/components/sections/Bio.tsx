import * as React from 'react';
import Button from 'components/Button';
import { SubHeader } from 'components/headers';

export const Bio = (props: { onContactButtonClick: () => void; }) => (
  <div style={{ color: '#f6f6f6', textAlign: 'center' }}>
    <SubHeader style={{ marginTop: 50 }}>BIOGRAPHY</SubHeader>
    <h5 style={{ margin: 15 }}>Frontend Engineer | BCIT Alumni | Craftsman</h5>
    <div>
      I&apos;m a React Developer. <br /><br />
      I love working with talented people that push me past my limits. <br /><br />
      I&apos;m looking to work on exciting software that I can be proud of.<br /><br />
      If you think we&apos;re a match, please reach out and let&apos;s talk!
      <br />
      <div style={{ marginTop: 25 }}>
        <Button
          onClick={props.onContactButtonClick}
        >
          CONTACT ME!
        </Button>
      </div>
    </div>
  </div>
);

export default Bio;
