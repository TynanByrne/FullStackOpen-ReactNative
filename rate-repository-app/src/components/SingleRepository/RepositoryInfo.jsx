import React from 'react';
import { View } from 'react-native';
import RepositoryItem from '../RepositoryList/RepositoryItem';
import { styles } from '../RepositoryList/RepositoryItem';

const RepositoryInfo = ({ repository }) => {
  return (
    <View>
      <RepositoryItem
        fullName={repository?.fullName}
        description={repository?.description}
        language={repository?.language}
        forksCount={repository?.forksCount}
        stargazersCount={repository?.stargazersCount}
        ratingAverage={repository?.ratingAverage}
        reviewCount={repository?.reviewCount}
        url={repository?.ownerAvatarUrl}
        style={styles?.repository}
        githubUrl={repository?.url}
        githubLink
      />
    </View>
  )
}

export default RepositoryInfo;