/**
 *  Redux saga class init
 */
import { all } from 'redux-saga/effects';
import loginSagas from 'app/screens/Login/loginSaga';
import productSagas from 'app/screens/Home/productSaga';

export default function* watch() {
  yield all([loginSagas(), productSagas()]);
}
