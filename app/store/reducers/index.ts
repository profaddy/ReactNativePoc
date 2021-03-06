/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from 'app/screens/Login/loginReducer';
import * as productReducer from 'app/screens/Home/productReducer';
import * as themeReducer from './themeReducer';
export default Object.assign(
  loginReducer,
  loadingReducer,
  themeReducer,
  productReducer
);
