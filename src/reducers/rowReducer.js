const initialState = {
  rows: [],
  loading: false,
  lastId: '',
  error: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_WORDS_SUCCESS':
      const lastId = action.rows[action.rows.length - 1]._id
      return {...state, rows: state.rows.concat(action.rows), lastId, loading: false}
    case 'GET_WORDS_EMPTY':
      return state
    case 'GET_WORDS_FAIL':
      return state
    case 'GET_WORDS_START':
      return {...state, loading: true}
    case 'SORT_ROWS':
      const key = action.key
      const rows = state.rows.sort((a, b) => {
        const sortedArray = [ a[key], b[key] ].sort()
        const aKeyIndex = sortedArray.indexOf(a[key])
        const bKeyIndex = sortedArray.indexOf(b[key])
        return aKeyIndex - bKeyIndex
      })
      return {...state, rows}
    default:
      return state
  }
}
