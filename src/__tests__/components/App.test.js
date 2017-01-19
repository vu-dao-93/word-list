import React from 'react';
import ReactDOM from 'react-dom';
import connectComponent from '../../utils/testHelpers';

import ConnectedApp from '../../components/App';


describe('App', () => {
  let colReducer = ['word', 'points', 'pickRate', 'successRate'];
  let rowReducer = {rows: [{word: 'Hello', points: 1, pickRate: 0.9, successRate: 1}]};
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(connectComponent(<ConnectedApp/>, {colReducer, rowReducer}), div);
  });

})
