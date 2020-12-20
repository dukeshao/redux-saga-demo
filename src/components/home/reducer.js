import * as types from './types'

const defaultState = {
  count: 1
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.increment:
      return Object.assign({}, {
        count: state.count + 1
      });
    case types.decrement:
      return Object.assign({}, {
        count: state.count - 1
      });
    default:
      return state;
  }
}

export default reducer;