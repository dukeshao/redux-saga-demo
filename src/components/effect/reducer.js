import * as types from './types'

const defaultState = {
  data: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.fetchSucceed:
      return Object.assign({}, {
        data: action.data
      });
    case types.fetchFailed:
      return Object.assign({}, {
        data: action.data
      });
    default:
      return state;
  }
}

export default reducer;