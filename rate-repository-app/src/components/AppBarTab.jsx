import React from 'react';
import Text from './Text';
import { View } from 'react-native';

const AppBarTab = ({ style }) => {
  return (
    <View style={style}>
      <Text color='secondary'>Route</Text>
    </View>
  );
};

export default AppBarTab;