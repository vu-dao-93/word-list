jest.mock('./apiCall');

import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  const app = mount(<App/>)
  app.instance().componentDidMount()
  app.state('columns').forEach(col => {
    it(`should sortItems by "${col}"`, () => {
      app.instance()._sortRows(col);

      const unSortedArray = app.state('rows').map(item => item[col])
      const sortedArray = unSortedArray.map(item => item).sort()
      expect(sortedArray).toEqual(unSortedArray)
    })
  })
})
