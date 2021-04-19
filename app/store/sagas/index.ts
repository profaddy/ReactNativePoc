/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';
import * as loginTypes from 'app/screens/Login/types';
import loginSagas from 'app/screens/Login/loginSaga';
import productSagas from 'app/screens/Home/productSaga';

export default function* watch() {
  // yield all([takeEvery(loginTypes.LOGIN_REQUEST, loginSaga)]);
  yield all([loginSagas(), productSagas()]);
}
