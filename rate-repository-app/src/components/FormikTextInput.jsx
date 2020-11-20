import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
  },
});

const FormikTextInput = ({ name, formStyles, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  let style = formStyles.formInput;
  if (showError) {
    style = {
      ...formStyles.formInput,
      borderColor: theme.colors.error,
    };
  }

  return (
    <View style={style}>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;