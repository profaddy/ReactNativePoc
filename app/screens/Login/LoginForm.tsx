//@ts-nocheck
import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextInput, Title } from 'react-native-paper';

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

export default function Login(props) {
  const {onLogin} = props;
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
    {
      // alert(`Email: ${values.email}, Password: ${values.password}`)
      onLogin();
    }
    });

  const password = useRef(null);

  return (
    <View
      style={{
        margin:20,

        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        // width:"100%"
      }}
    >
      <Title style={{marginBottom:20,  justifyContent: 'center',alignItems: 'center'}}>Welcome Back</Title>
      <View style={{marginBottom:20}}>
        <TextInput
          type={"flat"}
          label="Email"
          value={values.email}
          onChangeText={handleChange("email")}
        />
        </View>
        <View style={{marginBottom:20}}>
        <TextInput
        type={"flat"}
          label="Password"
          secureTextEntry={true}
          value={values.password}
          onChangeText={handleChange("password")}
        />
        </View>
        <View>
      <Button icon={"login"} mode={"contained"}onPress={handleSubmit}><Text>Login</Text></Button>
      </View>
    </View>
  );
}
