import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { useParams } from 'react-router-native';
import { FETCH_REPO } from '../../graphql/queries';
import { ItemSeparator } from '../RepositoryList/RepositoryListContainer';
import { FlatList } from 'react-native';
import RepositoryInfo from './RepositoryInfo';
import ReviewItem from './ReviewItem'

const SingleRepository = () => {
  const { id } = useParams();
  console.log(id);
  const repositoryResult = useQuery(FETCH_REPO, {
    fetchPolicy: 'cache-and-network',
    variables: { id },
  });
  const repository = repositoryResult?.data?.repository;
  const reviews = repository?.reviews?.edges.map(edge => edge.node);
  console.log("REVIEWS ARE", reviews)

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}

    />
  );
}

export default SingleRepository;