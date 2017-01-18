import React from 'react'
import { shallow } from 'enzyme'

import TBody from '../../components/TBody'

describe('Test suite for TBody component', () => {
  let wrapper = shallow(<TBody rows={ [{word: 'Hello'}] } columns={ ['word'] }/>)
  it('TBody component should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('Correctly displays 1 table row with 1 cell with content: ´Hello´', () => {
    let rows = wrapper.find('.tb__row')
    expect(rows.length).toEqual(1)
    let cell = rows.childAt(0).find('.tb__col')
    expect(cell.length).toEqual(1)
    expect(cell.childAt(0).text()).toEqual('Hello')
  })
})
