import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';
import { styles } from '../RepositoryList/RepositoryItem';
import { format } from 'date-fns';

const reviewStyles = StyleSheet.create({
  score: {
    height: 70,
    width: 70,
    borderRadius: 25,
    borderColor: theme.colors.secondary,
    borderWidth: 5,
    borderStyle: 'solid',
    display: 'flex',
    alignItems: 'center',
    marginRight: 15,
    flexShrink: 1,
    justifyContent: 'center'
  },
})

const ReviewItem = ({ review }) => {
  console.log("REVIEW IS", review)
  if (!review) {
    return null;
  }
  return (
    <>
      <View style={styles.main}>
        <View style={styles.imageColumn}>
          <View style={reviewStyles.score}>
            <Text fontWeight='bold' color={theme.colors.secondary}>{review.rating}</Text>
          </View>
        </View>
        <View style={styles.titleColumn}>
          <Text fontSize='subheading' fontWeight='bold'>{review.user.username}</Text>
          <Text fontWeight='washed' testID='description'>{format(new Date(review.createdAt), 'dd/MM/yyyy')}</Text>
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.imageColumn}></View>
        <View style={styles.titleColumn}>
          <Text>{review.text}</Text>
        </View>
      </View>
    </>
  )
}

export default ReviewItem;