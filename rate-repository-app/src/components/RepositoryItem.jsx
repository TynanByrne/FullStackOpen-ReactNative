import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepoItemMain from './RepoItemMain';
import RepoItemLanguage from './RepoItemLanguage';
import RepoItemInfo from './RepoItemInfo';

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'space-around',

  },
  imageColumn: {
    flexGrow: 0.2,
  },
  titleColumn: {
    flexGrow: 0.8,
  },
  info: {
    justifyContent: 'space-evenly',
  }
});

const RepositoryItem = (props) => {
  return (
    <View style={props.style}>
      <RepoItemMain
        fullName={props.fullName}
        url={props.url}
        description={props.description}
        styles={styles} />
      <RepoItemLanguage styles={styles} language={props.language} />
      <RepoItemInfo
        forksCount={props.forksCount}
        stargazersCount={props.stargazersCount}
        ratingAverage={props.ratingAverage}
        reviewCount={props.reviewCount}
        styles={styles}
      />
    </View>
  );
};

export default RepositoryItem;