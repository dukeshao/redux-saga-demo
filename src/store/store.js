//引入 根reducer、根saga 创建store

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

rootSaga.forEach(saga => {
  sagaMiddleware.run(saga)
})

export default store;