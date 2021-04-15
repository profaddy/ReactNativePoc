//@ts-nocheck
import React, { useRef } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextInput, Title } from 'react-native-paper';
import {
  StyledTitle,
  Container,
  FormField,
  ErrorText,
  StyledTextInput,
  StyledButton,
  StyledText,
} from './styles';
import styles from './styles';
import { Button } from 'react-native-paper';
const LoginSchema = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

export default function Signup(props) {
  const { goBack, onSignup } = props;

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { firstName: '', lastName: '', email: '', password: '' },
    onSubmit: (values) => {
      onSignup();
    },
  });
  const ref_lastName = useRef();
  const ref_email = useRef();
  const ref_password = useRef();

  return (
    <ScrollView>
      <Container>
        <StyledTitle>Register</StyledTitle>
        <FormField>
          <StyledTextInput
            type={'flat'}
            label="First Name"
            value={values.firstName}
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            onSubmitEditing={() => ref_lastName.current.focus()}
          />
          {errors.firstName && touched.firstName && (
            <ErrorText>{errors.firstName}</ErrorText>
          )}
        </FormField>
        <FormField>
          <StyledTextInput
            ref={ref_lastName}
            type={'flat'}
            label="Last Name"
            value={values.lastName}
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            onSubmitEditing={() => ref_email.current.focus()}
          />
          {errors.lastName && touched.lastName && (
            <ErrorText>{errors.lastName}</ErrorText>
          )}
        </FormField>
        <FormField>
          <StyledTextInput
            ref={ref_email}
            type={'flat'}
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            onSubmitEditing={() => ref_password.current.focus()}
          />
          {errors.email && touched.email && (
            <ErrorText>{errors.email}</ErrorText>
          )}
        </FormField>
        <FormField>
          <StyledTextInput
            ref={ref_password}
            type={'flat'}
            label="Password"
            secureTextEntry={true}
            value={values.password}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
          />
          {errors.password && touched.password && (
            <ErrorText>{errors.password}</ErrorText>
          )}
        </FormField>
        <View>
          <StyledButton
            icon={'login'}
            mode={'contained'}
            onPress={handleSubmit}
          >
            <StyledText>Signup</StyledText>
          </StyledButton>
        </View>
      </Container>
      <StyledButton mode="text" labelStyle={styles.labelStyle} onPress={goBack}>
        <StyledText>Back to Login</StyledText>
      </StyledButton>
    </ScrollView>
  );
}
