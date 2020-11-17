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
    flexShrink: 0,
  },
  appTitle: {
    flexGrow: 1,
    padding: 10,
    marginRight: 'auto',
    width: 'auto',
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
          <Link to='/' component={TouchableHighlight}>
            <View>
              <Text fontSize='heading' color='secondary'>Repository Rater</Text>
            </View>
          </Link>
          <AppBarTab style={styles.appBarTabs} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AppBar;