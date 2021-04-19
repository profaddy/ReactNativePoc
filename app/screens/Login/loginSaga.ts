import { takeEvery, all } from 'redux-saga/effects';
import * as loginTypes from './types';
import { put, call } from 'redux-saga/effects';
// import { delay } from 'redux-saga';

import { Alert } from 'react-native';
import { loginUser } from './loginApi';
import * as loginActions from './loginActions';
import * as types from './types';

// Our worker Saga that logins the user
function* loginSaga(action) {
  yield put(loginActions.enableLoader());

  //how to call api
  const payload = {
    email: action.username,
    password: action.password,
  };
  const response = yield call(loginUser, payload);
  console.log(response, 'login response');
  // mock response
  // const response = { success: true, data: { id: 1 }, message: 'Success' };

  if (response.success) {
    yield put({ type: types.LOGIN_RESPONSE, response: response });
    yield put(loginActions.disableLoader());

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader());
    setTimeout(() => {
      Alert.alert('Error', response.message);
    }, 200);
  }
}

export default function* loginSagas() {
  yield all([takeEvery(loginTypes.LOGIN_REQUEST, loginSaga)]);
}
