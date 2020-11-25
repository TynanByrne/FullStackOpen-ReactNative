import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { useParams } from 'react-router-native';
import { FETCH_REPO } from '../../graphql/queries';
import RepositoryItem from '../RepositoryList/RepositoryItem';
import { View } from 'react-native';
import { styles } from '../RepositoryList/RepositoryItem';

const SingleRepository = () => {
  const { id } = useParams();
  console.log(id);
  const repositoryResult = useQuery(FETCH_REPO, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });
  const repository = repositoryResult?.data?.repository;

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
  );
}

export default SingleRepository;