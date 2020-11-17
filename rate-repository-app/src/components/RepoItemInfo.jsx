import React from 'react';
import Text from './Text';
import { View } from 'react-native';

const converter = (number) => {
  if (number > 1000) {
    const converted = (number / 1000).toFixed(1);
    return `${converted}k`;
  }
  return number;
};

const RepoItemInfo = (props) => {
  return (
    <View style={props.styles.infoContainer}>
      <View style={props.styles.infoView}>
        <Text fontWeight='bold'>{converter(props.stargazersCount)}</Text>
        <Text fontWeight='washed'>Stars</Text>
      </View>
      <View style={props.styles.infoView}>
        <Text fontWeight='bold'>{converter(props.forksCount)}</Text>
        <Text fontWeight='washed'>Forks</Text>
      </View>
      <View style={props.styles.infoView}>
        <Text fontWeight='bold'>{converter(props.reviewCount)}</Text>
        <Text fontWeight='washed'>Review</Text>
      </View>
      <View style={props.styles.infoView}>
        <Text fontWeight='bold'>{converter(props.ratingAverage)}</Text>
        <Text fontWeight='washed'>Rating</Text>
      </View>
    </View>
  );
};

export default RepoItemInfo;