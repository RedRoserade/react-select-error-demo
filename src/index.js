import React from 'react';
import { render } from 'react-dom';

import 'react-select/dist/react-select.css';

import WithTombForm from './WithTcombForm';

import Simple from './Simple';

const styles = {
  fontFamily: 'sans-serif'
};

const App = () => (
  <div style={styles}>
    <Simple />
    <WithTombForm />
  </div>
);

render(<App />, document.getElementById('root'));
