import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

import * as types from './types'

function* incrementAsync() {

  yield delay(1000);
  yield put({ type: types.increment, count: 9 })
}


export default function* homeSaga() {
  yield takeEvery(types.increment_async, incrementAsync)
}
