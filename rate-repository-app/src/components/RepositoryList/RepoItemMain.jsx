import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import Text from '../Text';

const RepoItemMain = ({ styles, url, fullName, description }) => {
  const imageStyle = StyleSheet.create({
    width: 80,
    height: 80,
  });
  return (
    <View style={styles.main}>
      <View style={styles.imageColumn}>
        <Image
        style={imageStyle}
        source={{ uri: `${url}` }} />
      </View>
      <View style={styles.titleColumn}>
        <Text fontSize='subheading' fontWeight='bold' testID='fullName'>{fullName}</Text>
        <Text fontWeight='washed' testID='description'>{description}</Text>
      </View>
    </View>
  );
};

export default RepoItemMain;