import * as types from './types'

const defaultState = {
  user: "false",
  info: {
    name: 'xx',
    phone: "xxxxxxxxxxx",
    login: "false"
  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.loginIn:
      return Object.assign({}, state, { user: "true", info: action.info });
    case types.loginOut:
      return Object.assign({}, state,
        {
          user: "false",
          info: {
            name: 'xx',
            phone: "xxxxxxxxxxx",
            login: "false"
          }
        });
    // case types.loginIn:
    //   return Object.assign({}, Object.assign(
    //     {}, state.user, { login: "true" }
    //   ));
    // case types.loginOut:
    //   return Object.assign({}, Object.assign(
    //     {}, state.user, { login: "false" }
    //   ));
    // case types.updateUserInfo:
    //   return Object.assign({},
    //     Object.assign({}, state.user, action.useInfo)
    //   );
    default:
      return state;
  }
}

export default reducer;