import React from 'react';
import { View, Button } from 'react-native';
import theme from '../theme';

const RepoItemLanguage = ({ styles, language }) => {
  return (
    <>
      <View style={styles.imageColumn}>

      </View>
      <View style={styles.titleColumn}>
        <Button title={language} color={theme.colors.secondary}/>
      </View>
    </>
  );
};

export default RepoItemLanguage;