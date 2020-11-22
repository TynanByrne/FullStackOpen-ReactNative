import React from 'react';
import { StyleSheet } from 'react-native';
import { Formik } from 'formik';
import { useHistory } from 'react-router-native';
import * as yup from 'yup';

import theme from '../theme';
import useSignIn from '../hooks/useSignIn';
import SignInForm from './SignInForm';

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


const initialValues = {
  username: '',
  password: '',
};


const SignIn = () => {
  const [signIn] = useSignIn();
  const history = useHistory();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm styles={styles} onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;