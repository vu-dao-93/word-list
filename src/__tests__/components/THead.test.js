import React from 'react'
import { mount } from 'enzyme'
import connectComponent from '../../utils/testHelpers';

import THead from '../../components/THead'

describe('Test suite for THead component', () => {
  let colReducer = ['word', 'points', 'pickRate', 'successRate']
  let wrapper = mount(connectComponent(<THead/>, {colReducer}));
  it('THead component should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('Correctly displays 1 header row with 4 cells for 4 columns', () => {
    let cols = wrapper.find('.th__col')
    expect(cols.length).toEqual(4)
  })

  it('Swap column 1 and 2', () => {
    let col1 = wrapper.find('.th__col__swap').at(0)
    let col2 = wrapper.find('.th__col__swap').at(1)
    col1.simulate('mousedown')
    console.log(wrapper.state());
    expect(wrapper.state().colToSwap.text).toEqual(col1.text())
    col2.simulate('mouseup')
    expect(wrapper.state().colToSwap).toEqual(null)
    // expect(wrapper.props().updateCols).toHaveBeenCalled()
  })
})
