import * as rowActions from '../../actions/rowActions'

describe('rowActions actions', () => {
  it('should dispatch sort rows action', () => {
    expect(rowActions.sortRows('word')).toEqual({type: 'SORT_ROWS', key: 'word'})
  })
})
