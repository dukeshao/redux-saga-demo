//引入所有 reducer 模块，按命名空间合并

import { combineReducers } from 'redux'

import homeReducer from '../components/home/reducer'
import listReducer from '../components/list/reducer'
import reducer from '../components/reducer'
import effectReducer from '../components/effect/reducer'

const rootReducer = combineReducers({
  app: reducer,
  home: homeReducer,
  list: listReducer,
  effect: effectReducer
})
export default rootReducer;