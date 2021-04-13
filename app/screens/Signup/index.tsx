//@ts-nocheck
import React from 'react';
import { Text,View } from 'react-native';
import SignupForm from './SignupForm.tsx';
import { Button } from 'react-native-paper';

import NavigationService from 'app/navigation/NavigationService';

import styles from './styles';
const Signup: React.FC = () => {
  const goBack = () => NavigationService.navigate("Login");
  const onSignup = () => NavigationService.navigate("Login");
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
      <SignupForm goBack={goBack} onSignup={onSignup}/>
      </View>
  </View>
);
};

export default Signup;
