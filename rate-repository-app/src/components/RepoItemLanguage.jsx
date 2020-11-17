import React from 'react';
import { View } from 'react-native';
import theme from '../theme';
import Text from './Text';

const textStyle = {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.backgroundPrimary,
    borderRadius: 5,
    padding: 5,
    margin: 'auto',
  };

const RepoItemLanguage = ({ styles, language }) => {
  return (
    <View style={styles.main}>
      <View style={styles.imageColumn}>

      </View>
      <View style={styles.titleColumn}>
        <Text style={textStyle}>{language}</Text>
      </View>
    </View>
  );
};

export default RepoItemLanguage;