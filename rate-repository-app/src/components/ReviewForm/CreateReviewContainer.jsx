import React from 'react';
import { Formik } from 'formik';
import CreateReviewForm from './CreateReviewForm';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
}

const CreateReviewContainer = ({ styles, validationSchema, onSubmit}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
        {({ handleSubmit }) => (
          <CreateReviewForm
            styles={styles}
            onSubmit={handleSubmit} />
          )}
      </Formik>
  );
};

export default CreateReviewContainer;