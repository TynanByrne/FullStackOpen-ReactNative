import React from 'react';
import { Image, View } from 'react-native';
import Text from './Text';

const RepoItemMain = ({ styles, url, fullName, description }) => {
  console.log(url);
  return (
    <View>
      <View style={styles.imageColumn}>
        <Image
        style={{width: 100, height: 100 }}
        source={{ uri: `${url}` }} />
      </View>
      <View style={styles.titleColumn}>
        <Text fontSize='subheading' fontWeight='bold' >{fullName}</Text>
        <Text fontWeight='washed'>{description}</Text>
      </View>
    </View>
  );
};

export default RepoItemMain;