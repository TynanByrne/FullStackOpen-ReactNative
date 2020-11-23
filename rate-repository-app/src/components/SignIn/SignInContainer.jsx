import React from 'react';
import SignInForm from './SignInForm';
import { Formik } from 'formik';

const initialValues = {
  username: '',
  password: '',
};

const SignInContainer = ({ onSubmit, validationSchema, styles }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm styles={styles} onSubmit={handleSubmit} />}
    </Formik>
  )
}

export default SignInContainer;