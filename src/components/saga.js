import { delay } from 'redux-saga';
import { put, all, takeLatest } from 'redux-saga/effects';

import * as types from './types'

function* loginIn(action) {
  console.log("action=>", action)
  yield delay(1000);
  yield put({ type: types.loginIn, info: action.info })
}
function* loginOut(action) {
  console.log("action=>", action)
  yield delay(1000);
  yield put({ type: types.loginOut })
}


export default function* listSaga() {
  yield takeLatest(types.loginInAsync, loginIn)
  yield takeLatest(types.loginOutAsync, loginOut)
}

