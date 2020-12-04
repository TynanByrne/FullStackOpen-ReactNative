import { useMutation, useQuery } from '@apollo/react-hooks';
import React from 'react';
import { FlatList, Alert } from 'react-native';
import { DELETE_REVIEW } from '../../graphql/mutations';
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

  const [deleteReview] = useMutation(DELETE_REVIEW);

  const alert = (id) =>
    Alert.alert(
      'Delete review',
      'Do you really want to delete this review?',
      [
        {
          text: "CANCEL",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "DELETE",
          onPress: () =>
            deleteReview({
              variables: { id },
              refetchQueries: [
                {
                  query: AUTHORIZED_USER,
                  variables: {
                    includeReviews: true,
                  },
                },
              ],
            }),
        },
      ],
      { cancelable: false }
    );

  const { data, loading, error } = reviewsResult;

  if (!data) {
    return null;
  }

  const renderItem = ({ item }) =>
    <UserReviewItem
      item={item}
      alert={alert} />;
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