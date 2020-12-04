import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import { FlatList } from 'react-native';
import { AUTHORIZED_USER } from '../../graphql/queries';
import { ItemSeparator } from '../RepositoryList/RepositoryListContainer';
import UserReviewItem from './UserReviewItem';

const MyReviews = () => {
  const reviewsResult = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables: {
      includeReviews: true,
    }
  });

  const { data, loading, error } = reviewsResult;

  if (!data) {
    return null;
  }

  const renderItem = ({ item }) => 
    <UserReviewItem
      item={item}
      myReview />;
  const reviews = data
    ? data.authorizedUser.reviews.edges
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={renderItem}
      keyExtractor={({ node: { id } }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  )
}

export default MyReviews;