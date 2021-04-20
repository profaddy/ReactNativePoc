/* Login Reducer
 * handles login states in the app
 */
import createReducer from 'app/lib/createReducer';
import * as types from './types';

import { IProductsState, IResponse } from 'app/models/reducers/login';
const initialState: IProductsState = {
  productList: [],
  fetchingStatus: 'unknown',
};

export const productReducer = createReducer(initialState, {
  [types.FETCH_PRODUCT_REQUEST](state: IProductsState, action: object) {
    return {
      ...state,
      fetchingStatus: 'loading',
    };
  },
  [types.FETCH_PRODUCT_SUCCESS](state: IProductsState, action: object) {
    return {
      ...state,
      fetchingStatus: 'success',
      productList: action.data,
    };
  },
  [types.FETCH_PRODUCT_FAILURE](state: IProductsState, action: object) {
    return {
      ...state,
      fetchingStatus: 'failed',
      productList: [],
    };
  },
});
