import 'whatwg-fetch'
import * as types from './types'

const API_END_POINT = 'http://localhost:8000/api'

export const getWordList = (length, start) => dispatch => {
  let url = `${API_END_POINT}/words?length=${length}`
  url += (start) ? `&start=${start}` : ''

  dispatch({type: types.GET_WORDS_START})
  return fetch(url).then(response => {
    if (response.status >= 200 && response.status <= 300) return response;
    let error = new Error(response.statusText)
    error.response = response
    dispatch({type: types.GET_WORDS_FAIL, error})
    throw error
  }).then(res => res.json()).then(rows => {
    if (!rows.length) {
      dispatch({type: types.GET_WORDS_EMPTY})
      return []
    }
    dispatch({type: types.GET_WORDS_SUCCESS, rows})
    return rows
  }).catch(error => {
    console.log(error);
    dispatch({type: types.GET_WORDS_FAIL, error})
    throw error
  })
}

export const sortRows = (key) => ({type: types.SORT_ROWS, key})
