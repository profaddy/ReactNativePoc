/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as loginTypes from 'app/screens/Login/types';
import loginSaga from 'app/screens/Login/loginSaga';

export default function* watch() {
  yield all([takeEvery(loginTypes.LOGIN_REQUEST, loginSaga)]);
}