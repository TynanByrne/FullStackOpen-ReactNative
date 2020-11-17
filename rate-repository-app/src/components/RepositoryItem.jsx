import React from 'react';
import { View, StyleSheet } from 'react-native';
import RepoItemMain from './RepoItemMain';
import RepoItemLanguage from './RepoItemLanguage';
import RepoItemInfo from './RepoItemInfo';

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    padding: 15,
    flexShrink: 0,

  },
  imageColumn: {
    flexGrow: 0,
    padding: 5,
  },
  titleColumn: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  infoView: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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