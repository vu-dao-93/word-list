import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';

import ConnectedApp, {App} from '../../components/App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  describe('mount component', () => {
    let app = mount(<App/>)
    it('should get rows data', () => {
      setTimeout(function () {
        expect(app.state().rows.length).toBeGreaterThan(0)
      }, 10);
    })
    it(`should sortItems by columns`, () => {
      setTimeout(function () {
        app.state().columns.forEach(col => {
          app.instance()._sortRows(col);
          const unSortedArray = app.state('rows').map(item => item[col])
          const sortedArray = unSortedArray.map(item => item).sort()
          expect(sortedArray).toEqual(unSortedArray)
        })
      }, 10);
    })
  })
})
