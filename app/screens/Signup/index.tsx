//@ts-nocheck
import React from 'react';
import { View } from 'react-native';
import SignupForm from './SignupForm.tsx';

import NavigationService from 'app/navigation/NavigationService';

import { Container, FormContainer } from './styles';
const Signup: React.FC = () => {
  const goBack = () => NavigationService.navigate('Login');
  const onSignup = (values) => NavigationService.navigate('Login');
  return (
    <Container>
      <FormContainer>
        <SignupForm goBack={goBack} onSignup={onSignup} />
      </FormContainer>
    </Container>
  );
};

export default Signup;
