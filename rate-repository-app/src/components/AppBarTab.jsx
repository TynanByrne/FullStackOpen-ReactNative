import React, { useContext } from 'react';
import Text from './Text';
import { View, TouchableHighlight, ScrollView } from 'react-native';
import { Link, useHistory } from 'react-router-native';
import { useApolloClient } from '@apollo/react-hooks';
import useGetUser from '../hooks/useGetUser';
import AuthStorageContext from '../contexts/AuthStorageContext';
import { Appbar } from 'react-native-paper';


const scrollViewStyle = {
  flexDirection: 'row',
  flexGrow: 1,
  alignContent: 'space-between',
};
const appBarTabStyle = {
  paddingHorizontal: 8,
}

const AppBarTab = ({ style }) => {
  const { authorizedUser } = useGetUser();
  const apolloClient = useApolloClient();
  const history = useHistory();
  const authStorage = useContext(AuthStorageContext);
  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/');
  };
  return (
    <View style={style}>
      <ScrollView horizontal style={scrollViewStyle}>
        <>
          {authorizedUser ?
            <>
              <View style={appBarTabStyle}>
                <Link to='/createreview' component={TouchableHighlight}>
                  < Text fontSize='subheading' color='secondary'>Create a review</Text>
                </Link>
              </View>
              <View style={appBarTabStyle}>
                <Link to='/myreviews' component={TouchableHighlight}>
                  < Text fontSize='subheading' color='secondary'>My reviews</Text>
                </Link>
              </View>
              <View style={appBarTabStyle}>
                <TouchableHighlight onPress={signOut}>
                  <Text fontSize='subheading' color='secondary'>Sign Out</Text>
                </TouchableHighlight>
              </View>
            </> :
            <>
              <View style={appBarTabStyle}>
                <Link to='/signin' component={TouchableHighlight}>
                  <Text fontSize='subheading' color='secondary'>Sign In</Text>
                </Link>
              </View>
              <View style={appBarTabStyle}>
                <Link to='/signup' component={TouchableHighlight}>
                  <Text fontSize='subheading' color='secondary'>Sign Up</Text>
                </Link>
              </View>
            </>
          }
        </>
      </ScrollView>
    </View>
  );
};

export default AppBarTab;