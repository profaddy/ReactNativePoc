import { takeEvery, all, call } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as types from './types';
import { getProductList } from './productApi';

// Our worker Saga that logins the user
function* productSaga(action: object) {
  try {
    console.log('test', 'test action product');
    const response = yield call(getProductList);
    console.log(response, 'products response');
    yield put({ type: types.FETCH_PRODUCT_SUCCESS, data: response });
  } catch (error) {
    console.log(error, 'error while fetching products');
    put({ type: types.FETCH_PRODUCT_FAILURE });
  }
}

export default function* productSagas() {
  yield all([takeEvery(types.FETCH_PRODUCT_REQUEST, productSaga)]);
}
