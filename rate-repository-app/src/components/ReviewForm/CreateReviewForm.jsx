import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';

const CreateReviewForm = ({ onSubmit, styles }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput
        name='repositoryOwnerUsername'
        placeholder='Repository owner username'
        formStyles={styles} />
      <FormikTextInput
        name='repositoryName'
        placeholder='Repository name'
        formStyles={styles} />
      <FormikTextInput
        name='rating'
        placeholder='Rating (0-100)'
        formStyles={styles} />
      <FormikTextInput
        name='review'
        placeholder='Review'
        formStyles={styles}
        multiline />
      <View style={styles.formSubmitButton}>
        <TouchableWithoutFeedback onPress={onSubmit}>
          <Text>Create a review</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default CreateReviewForm;