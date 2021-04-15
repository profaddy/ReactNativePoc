//@ts-nocheck
import React, { useRef } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { TextInput, Title } from 'react-native-paper';
import styles from './styles';
// import TextInput from '../../components/TextInput';
// import Button from '../../components/Button';
import { Button } from 'react-native-paper';
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
});

export default function Login(props) {
  const { goBack, onSignup } = props;

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    // validationSchema: LoginSchema,
    initialValues: { firstName: '', lastName: '', email: '', password: '' },
    onSubmit: (values) => {
      console.log(values);
      onSignup();
    },
  });

  return (
    <ScrollView>
      <View
        style={{
          margin: 20,
          justifyContent: 'center',
        }}
      >
        <Title
          style={{
            marginBottom: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Welcome Back
        </Title>
        <View style={{ marginBottom: 20 }}>
          <TextInput
            type={'flat'}
            label="First Name"
            value={values.firstName}
            onChangeText={handleChange('firstName')}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <TextInput
            type={'flat'}
            label="Last Name"
            value={values.lastName}
            onChangeText={handleChange('lastName')}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <TextInput
            type={'flat'}
            label="Email"
            value={values.email}
            onChangeText={handleChange('email')}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <TextInput
            type={'flat'}
            label="Password"
            secureTextEntry={true}
            value={values.password}
            onChangeText={handleChange('password')}
          />
        </View>

        <View>
          <Button icon={'login'} mode={'contained'} onPress={handleSubmit}>
            <Text>Signup</Text>
          </Button>
        </View>
      </View>
      <Button
        mode="text"
        style={styles.forgot}
        labelStyle={styles.labelStyle}
        onPress={goBack}
      >
        <Text>Back to Login</Text>
      </Button>
    </ScrollView>
  );
}
