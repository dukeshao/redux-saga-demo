import { delay } from 'redux-saga';
import { put, takeLatest } from 'redux-saga/effects';

import * as types from './types'

function* incrementAsync(action) {
  console.log("name=>", action.name)
  yield delay(1000);
  yield put({ type: types.increment })
}


export default function* listSaga() {
  yield takeLatest(types.increment_async, incrementAsync)
}
