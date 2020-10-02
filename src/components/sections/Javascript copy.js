import React from 'react';
import { TagCloud } from 'react-tagcloud';

import Sparta from 'assets/img/sparta.png';
import ReactLogo from 'assets/img/react.png';
import ReduxLogo from 'assets/img/redux.png';
import NodeLogo from 'assets/img/node.png';
import WebpackLogo from 'assets/img/webpack.png';
import EcmaScriptLogo from 'assets/img/es.png';

const data = [
  { value: 'redux-saga', count: 25 },
  { value: 'rollup', count: 8 },
  { value: 'express', count: 25 },
  { value: 'seamless-immutable', count: 15 },
  { value: 'sass', count: 25 },
  { value: 'less', count: 17 },
  { value: 'jenkins', count: 17 },
  { value: 'jest', count: 25 },
  { value: 'ansible', count: 8 },
  { value: 'travis', count: 15 },
  { value: 'eslint', count: 15 },
  { value: 'blueprintjs', count: 25 },
  { value: 'material-ui', count: 8 },
  { value: 'ag-grid', count: 17 },
  { value: 'semantic-ui', count: 15 },
  { value: 'open-fin', count: 15 },
  { value: 'mysql', count: 15 },
];

export const Javascript = () => (
  <div style={{ color: '#f6f6f6', textAlign: 'center' }}>
    <img src={Sparta} style={{ width: 75, height: 75 }} />
    <h1 style={{ margin: 0, height: 50 }}>Java? No, this.. is.. JAVASCRIPT!</h1>
    <br />
    <div
      style={{
        display: 'flex',
        width: '75%',
        margin: 'auto',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <img src={ReactLogo} style={{ width: 100, height: 100 }} />
        <br />
        React
      </div>
      <div>
        <img src={ReduxLogo} style={{ width: 100, height: 100 }} />
        <br />
        Redux
      </div>
      <div>
        <img src={NodeLogo} style={{ width: 100, height: 100 }} />
        <br />
        Node
      </div>
      <div>
        <img src={WebpackLogo} style={{ width: 100, height: 100 }} />
        <br />
        Webpack
      </div>
      <div>
        <img src={EcmaScriptLogo} style={{ width: 100, height: 100 }} />
        <br />
        EcmaScript
      </div>
    </div>
    <h3>But wait.. theres more!</h3>
    <TagCloud
      disableRandomColor
      minSize={8}
      maxSize={25}
      tags={data}
      style={{ width: '50%', margin: 'auto' }}
    />
  </div>
);

export default Javascript;
