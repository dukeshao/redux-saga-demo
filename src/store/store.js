//引入 根reducer、根saga 创建store

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
));

rootSaga.forEach(saga => {
  sagaMiddleware.run(saga)
})

export default store;