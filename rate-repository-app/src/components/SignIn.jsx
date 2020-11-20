import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formInput: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: theme.colors.textPrimary,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 40,
    marginVertical: 15,
  },
  formSubmitButton: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 40,
    marginVertical: 15,
  }
});

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Usernames must be at least of length 4')
    .required('Username is required'),
  password: yup
    .string()
    .min(6, 'Please choose a password at least of length 6')
    .required('Password is required'),
});

const onSubmit = (values) => {
  console.log(values);
};

const initialValues = {
  username: '',
  password: '',
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput 
        name='username'
        placeholder='Username'
        formStyles={styles} />
      <FormikTextInput
        name='password'
        placeholder='Password'
        formStyles={styles}
        secureTextEntry />
      <View style={styles.formSubmitButton}>
        <TouchableWithoutFeedback onPress={onSubmit}>
          <Text>Sign in</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const SignIn = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;