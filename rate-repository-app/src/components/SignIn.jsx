import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme'

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formInput: {
    borderStyle: 'solid',
    borderRadius: 1,
    padding: 20,
    marginHorizontal: 40,
  },
  formSubmitButton: {
    backgroundColor: theme.colors.secondary,
    borderRadius: 1,
    padding: 20,
    marginHorizontal: 40
  }

})

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
      <View style={styles.formInput}>
        <FormikTextInput name='username' placeholder='Username' />
      </View>
      <View style={styles.formInput}>
        <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      </View>
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
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;