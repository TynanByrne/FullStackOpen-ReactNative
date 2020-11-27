import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import * as yup from 'yup';
import { useHistory } from 'react-router-native';

import theme from '../../theme';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_REVIEW } from '../../graphql/mutations';
import CreateReviewContainer from './CreateReviewContainer';

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
  const [createReview, mutationData] = useMutation(CREATE_REVIEW);
  const history = useHistory();

  const onSubmit = async values => {
    const {
      repositoryName,
      repositoryOwnerUsername,
      review,
      rating,
    } = values

    try {
      const reviewData = await createReview({
        variables: {
          review: {
            repositoryName,
            repositoryOwnerUsername,
            review,
            rating,
          }
        }
      });
      console.log(reviewData);
      if (reviewData?.createReview) {
        history.push(`/repository/${reviewData.createReview.repositoryId}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <CreateReviewContainer
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        styles={styles} />
      {mutationData.error && (
        Alert.alert(
          'GraphQL Error',
          'Something went wrong with the server.',
          )
      )}
    </>
  )

}

export default CreateReview;