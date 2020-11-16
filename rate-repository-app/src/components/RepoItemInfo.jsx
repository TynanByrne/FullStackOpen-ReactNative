import React from 'react';
import Text from './Text';
import { View } from 'react-native';

const RepoItemInfo = (props) => {
  return (
    <View styles={props.styles.info}>
      <View>
        <Text fontWeight='bold'>{props.stargazersCount}</Text>
        <Text fontWeight='washed'>Stars</Text>
      </View>
      <View>
        <Text fontWeight='bold'>{props.forksCount}</Text>
        <Text fontWeight='washed'>Forks</Text>
      </View>
      <View>
        <Text fontWeight='bold'>{props.reviewCount}</Text>
        <Text fontWeight='washed'>Review</Text>
      </View>
      <View>
        <Text fontWeight='bold'>{props.averageRating}</Text>
        <Text fontWeight='washed'>Rating</Text>
      </View>
    </View>
  );
};

export default RepoItemInfo;