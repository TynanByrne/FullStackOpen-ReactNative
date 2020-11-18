import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import Text from './Text';
import theme from '../theme';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.primary,
  },
  appTitle: {
    flexGrow: 0,
    padding: 10,
    flexShrink: 0,
  },
  appBarTabs: {
    flexGrow: 1,
    padding: 10,
    flex: 1
  },
});

const AppBar = () => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.container}>
        <View style={styles.appTitle}>
          <Link to='/' component={TouchableHighlight}>
              <Text fontSize='heading' color='secondary'>Repository Rater</Text>
          </Link>
        </View>
        <AppBarTab style={styles.appBarTabs} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;