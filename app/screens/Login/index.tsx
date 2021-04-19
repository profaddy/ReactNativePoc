import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as loginActions from 'app/screens/Login/loginActions';
import MyForm from './LoginForm';
import styles from './styles';
import {
  Container,
  FormContainerWrapper,
  StyledButton,
  StyledText,
  StyledTitle,
} from './styles';
import { ILoginState } from 'app/models/reducers/login';
import NavigationService from 'app/navigation/NavigationService';

interface IState {
  loginReducer: ILoginState;
}

const Login: React.FC = () => {
  const id = useSelector((state: IState) => state.loginReducer.id);
  const dispatch = useDispatch();
  const onLogin = (loginDetails: object) =>
    dispatch(
      loginActions.requestLogin(loginDetails.email, loginDetails.password)
    );
  const onForgot = () => NavigationService.navigate('ForgotPassword');
  return (
    <Container>
      <StyledTitle>Welcome Back!</StyledTitle>
      <FormContainerWrapper>
        <MyForm onLogin={onLogin} />
      </FormContainerWrapper>
      <StyledButton
        mode="text"
        onPress={onForgot}
        labelStyle={styles.labelStyle}
      >
        <StyledText>Forgot Password</StyledText>
      </StyledButton>
    </Container>
  );
};

export default Login;
