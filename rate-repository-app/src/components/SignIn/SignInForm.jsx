import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from '../FormikTextInput';
import Text from '../Text';

const SignInForm = ({ onSubmit, styles }) => {
  return (
    <View style={styles.form}>
      <FormikTextInput 
        name='username'
        placeholder='Username'
        formStyles={styles} />
      <FormikTextInput
        name='password'
        placeholder='Password'
        formStyles={styles}
        secureTextEntry />
      <View style={styles.formSubmitButton}>
        <TouchableWithoutFeedback onPress={onSubmit}>
          <Text>Sign in</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default SignInForm;