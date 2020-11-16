import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = (props) => {
  return (
    <View style={{ backgroundColor: 'white' }}>
      <Text>Full name: {props.fullName}</Text>
      <Text>Description: {props.description}</Text>
      <Text>Language: {props.language}</Text>
      <Text>Fork count: {props.forksCount}</Text>
      <Text>Stargazers count: {props.stargazersCount}</Text>
      <Text>Rating average: {props.ratingAverage}</Text>
      <Text>Review count: {props.reviewCount}</Text>
    </View>
  );
};

export default RepositoryItem;