import React from 'react';
import ReviewItem from '../SingleRepository/ReviewItem';

const UserReviewItem = ({ item, myReview }) => {
  return (
    <>
      <ReviewItem
        review={item.node}
        myReview
      />
    </>
  );
};

export default UserReviewItem;