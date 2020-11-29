import React from 'react'
import { Formik } from 'formik';
import SignUpForm from './SignUpForm';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
}

const SignUpContainer = ({ styles, validationSchema, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <SignUpForm styles={styles} onSubmit={handleSubmit} />
      )}
    </Formik>
  );
};

export default SignUpContainer;

