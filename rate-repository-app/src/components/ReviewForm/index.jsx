import React from 'react';
import { formik } from 'formik';
import * as yup from 'yup';

import theme from '../../theme';

const validationSchema = yup.object.shape({
  repositoryOwnerUsername: yup
    .string()
    .required('Repository owner username is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .integer(),
  review: yup
    .string(),
})

const CreateReview = () => {
  const [leaveReview, ]
}