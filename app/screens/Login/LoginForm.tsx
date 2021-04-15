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
  const [email, setEmail] = React.useState('');

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    // validationSchema: LoginSchema,
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      if (values.email === 'admin@test.com' && values.password === 'password') {
        onLogin();
      } else {
        alert(`Invalid Credentials for user ${values.email}`);
      }
    },
  });

  const password = useRef(null);

  return (
    <ScrollView>
      <FormContainer>
        <FormField>
          <StyledTextInput
            type={'flat'}
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
          />
        </FormField>
        <FormField>
          <StyledTextInput
            type={'flat'}
            label="Password"
            secureTextEntry={true}
            value={values.password}
            onChangeText={handleChange('password')}
          />
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
