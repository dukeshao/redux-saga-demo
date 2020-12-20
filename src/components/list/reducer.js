import * as types from './types'

const defaultState = {
  count: 2
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.increment:
      return Object.assign({}, {
        count: state.count + 2
      });
    case types.decrement:
      return Object.assign({}, {
        count: state.count - 2
      });
    default:
      return state;
  }
}

export default reducer;