import { useMutation } from '@apollo/react-hooks';
import React from 'react';
import { useHistory } from 'react-router-native';
import { StyleSheet, Alert } from 'react-native';
import * as yup from 'yup';
import { SIGN_UP } from '../../graphql/mutations';
import useSignIn from '../../hooks/useSignIn';

import theme from '../../theme';
import SignUpContainer from './SignUpContainer';

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
    .min(1, 'Usernames must be at least of length 1')
    .max(30, 'Usernames cannot exceed a length of 30')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Passwords must be at least of length 5')
    .max(50, 'Passwords must not exceed a length of 50')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Password confirmation is required'),
});

const SignUp = () => {
  const [signUp, mutationData] = useMutation(SIGN_UP);
  const [signIn] = useSignIn();
  const history = useHistory();

  const onSubmit = async values => {
    const { username, password } = values;

    try {
      const signUpData = await signUp({
        variables: {
          user: { username, password },
        }
      });
      console.log(signUpData)

      if (signUpData?.data?.createUser) {
        await signIn({ username, password });
        history.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <SignUpContainer
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        styles={styles} />
      {mutationData.error && (
        Alert.alert(
          'GraphQL Error',
          'Something went wrong when trying to sign you up. Try again.',
        )
      )}
    </>
  );
};

export default SignUp;