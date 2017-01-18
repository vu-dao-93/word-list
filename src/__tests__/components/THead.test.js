jest.mock('../services/apiCall')

import React from 'react'
import { mount } from 'enzyme'
import apiCall from '../services/apiCall'

import THead from '../components/THead'

describe('Test suite for THead component', () => {
  let wrapper;
  let columns = ['word', 'points', 'pickRate', 'successRate']
  it('THead component should exist', () => {
    return apiCall.getWordList(10)
    .then((data) => {
      wrapper = mount(<THead rows={data} columns={columns} />)
      return expect(wrapper).toBeDefined()
    })
  })

  it('Correctly displays 1 header row with 4 cells for 4 columns', () => {
    return apiCall.getWordList(10)
    .then((data) => {
      wrapper = mount(<THead rows={data} columns={columns} />)
      let cols = wrapper.find('.th__col')
      return expect(cols.length).toEqual(4)
    })
  })

  it('Swap column 1 and 2', () => {
    return apiCall.getWordList(10)
    .then((data) => {
      let updateCols = jest.fn()
      wrapper = mount(<THead rows={data} columns={columns} updateCols={updateCols} />)
      let col1 = wrapper.find('.th__col__swap').at(0)
      let col2 = wrapper.find('.th__col__swap').at(1)
      col1.simulate('mousedown')
      expect(wrapper.state().colToSwap.text).toEqual(col1.text())
      col2.simulate('mouseup')
      expect(wrapper.state().colToSwap).toEqual(null)
      expect(wrapper.props().updateCols).toHaveBeenCalled()
    })
  })
})
