//@ts-nocheck
import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextInput } from 'react-native-paper';

// import TextInput from '../../components/TextInput';
// import Button from '../../components/Button';
import {Button} from "react-native-paper"
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required')
});

export default function Login() {
  const [email, setEmail] = React.useState('');

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched
  } = useFormik({
    // validationSchema: LoginSchema,
    initialValues: { email: '', password: '' },
    onSubmit: values =>
      alert(`Email: ${values.email}, Password: ${values.password}`)
  });

  const password = useRef(null);

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
        <TextInput
      label="Email"
      value={values}
      onChangeText={email => setEmail(email)}
    />
      <Button onPress={handleSubmit}><Text>Login</Text></Button>
    </View>
  );
}
