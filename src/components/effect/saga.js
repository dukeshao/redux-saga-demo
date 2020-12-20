import { call, put, takeEvery, take } from 'redux-saga/effects'
import { getCategories } from './server'
import * as types from './types'
import * as appTypes from '../types'

function* fetchData() {
  try {
    const { data } = yield call(getCategories);
    yield put({ type: types.fetchSucceed, data: data.entity })
  } catch (error) {
    yield put({ type: types.fetchFailed, error })
  }
}

function* waitChange() {
  const action = yield take([appTypes.loginInAsync, appTypes.loginOutAsync]);
  console.log("waitChange action=>", action)
}

export default function* homeSaga() {
  yield takeEvery(types.fetchCategories, fetchData)
  yield takeEvery(types.waitChangeAsync, waitChange)
}