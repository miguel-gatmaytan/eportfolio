import * as React from 'react';
import { SubHeader } from 'components/headers';
import { Table } from 'semantic-ui-react';

const { Row, Body, Cell, Header, HeaderCell } = Table;

const ROW_COUNT = 10; //Hard coded for now.

const GOLD_TIER = [
  'React',
  'React Router',
  'Redux',
  'Redux Saga',
  'ESLint',
  'Webpack',
  'Babel',
  'Sass',
  'Less',
  'Storybook',
];

const SILVER_TIER = [
  'TypeScript',
  'CSS in JS',
  'JEST',
  'NodeJS',
  'Express',
  'EmotionJS',
  'PlotlyJS',
  'MomentJS',
  'Chromatic',
  'BlueprintJS',
];

const BRONZE_TIER = [
  'Web Accessibility',
  'MaterialUI',
  'SemanticUI',
  'AGGrid',
  'Plotly / Highcharts',
  'Lodash',
  'RollupJS',
  'NextJS',
  'Jenkins',
  'Apollo + GraphQL'
];

const ROWS = [];

for (let i = 0; i < ROW_COUNT; i++) {
  ROWS.push(
    <Row>
      <Cell>{GOLD_TIER[i]}</Cell>
      <Cell>{SILVER_TIER[i]}</Cell>
      <Cell>{BRONZE_TIER[i]}</Cell>
    </Row>
  );
}

export const Javascript = () => (
  <div style={{ color: '#f6f6f6', textAlign: 'center' }}>
    <SubHeader style={{ marginTop: 50 }}>SKILLSETS</SubHeader>
    <Table celled unstackable>
      <Header>
        <Row>
          <HeaderCell>Gold Tier</HeaderCell>
          <HeaderCell>Silver Tier</HeaderCell>
          <HeaderCell>Bronze Tier</HeaderCell>
        </Row>
      </Header>

      <Body>{ROWS}</Body>
    </Table>
  </div>
);

export default Javascript;
