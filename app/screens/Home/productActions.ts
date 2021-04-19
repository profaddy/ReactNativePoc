/*
 * Reducer actions related with login
 */
import * as types from './types';

export const getProducts = () => {
  return {
    type: types.FETCH_PRODUCT_REQUEST,
  };
};
