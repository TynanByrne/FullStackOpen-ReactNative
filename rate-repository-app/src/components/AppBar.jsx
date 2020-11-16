import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import theme from '../theme';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.primary,
  },
  appTitle: {
    flexGrow: 1,
    padding: 10,
  },
  appBarTabs: {
    flexGrow: 0,
    padding: 10,
  },
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.appTitle}>
          <Text fontSize='heading' color='secondary' >Repository Rater</Text>
        </View>
        <AppBarTab style={styles.appBarTabs} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;