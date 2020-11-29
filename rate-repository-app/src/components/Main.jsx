import React from 'react';
import { Route, Switch, Redirect } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList/index';
import AppBar from './AppBar';
import SignIn from './SignIn/SignIn';
import theme from '../theme';
import SingleRepository from './SingleRepository';
import CreateReview from './ReviewForm';
import SignUp from './SignUp';
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path='/' exact>
          <RepositoryList />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='/repository/:id' exact>
          <SingleRepository />
        </Route>
        <Route path='/createreview'>
          <CreateReview />
        </Route>
        <Redirect to='/' />
      </Switch>
    </View>
  );
};

export default Main;