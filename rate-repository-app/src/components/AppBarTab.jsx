import React from 'react';
import Text from './Text';
import { View, TouchableHighlight, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

const scrollViewStyle = {
  flexDirection: 'row',
  flexGrow: 1,
};

const AppBarTab = ({ style }) => {
  return (
    <View style={style}>
      <ScrollView horizontal style={scrollViewStyle}>
        <Link to='/signin' component={TouchableHighlight}>
            <Text fontSize='subheading' color='secondary'>Sign In</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBarTab;