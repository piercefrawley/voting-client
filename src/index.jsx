import React from 'react';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later']

React.render(
  <Voting pair={pair} winning="Trainspotting"/>,
  document.getElementById('app')
);
