//@ts-nocheck
import React, { useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  FormField,
  StyledView,
  FormContainer,
  StyledText,
  StyledButton,
  StyledTextInput,
  StyledTitle,
  ScrollView,
  ErrorText,
} from './styles';
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

export default function Login(props) {
  const { onLogin } = props;

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isValid,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      onLogin(values);
    },
  });

  const ref_password = useRef();
  console.log('touched', touched);

  return (
    <ScrollView>
      <FormContainer>
        <FormField>
          <StyledTextInput
            type={'flat'}
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            returnKeyType="next"
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
            onBlur={handleBlur('password')}
            value={values.password}
            onChangeText={handleChange('password')}
          />
          {errors.password && touched.password && (
            <ErrorText>{errors.password}</ErrorText>
          )}
        </FormField>
        <StyledView>
          <StyledButton
            icon={'login'}
            mode={'contained'}
            onPress={handleSubmit}
          >
            <StyledText>Login</StyledText>
          </StyledButton>
        </StyledView>
      </FormContainer>
    </ScrollView>
  );
}
