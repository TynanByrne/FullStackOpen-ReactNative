import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';

const CreateReviewForm = ({ onSubmit, styles }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput
        name='ownerName'
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
        name='text'
        placeholder='Review'
        formStyles={styles}
        multiline />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <View style={styles.formSubmitButton}>
          <Text>Create a review</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CreateReviewForm;