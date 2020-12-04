import React from 'react';
import { styles } from '../RepositoryList/RepositoryItem';
import ReviewItem from '../SingleRepository/ReviewItem';
import { StyleSheet, View, Dimensions } from 'react-native';
import theme from '../../theme';
import { Link } from 'react-router-native';
import { Button } from 'react-native-paper';

const { width } = Dimensions.get('window');

const extraStyles = StyleSheet.create({
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 15,
  },
  button: {
    flex: 1,
    width: width * 0.4
  },
});



const UserReviewItem = ({ item, alert }) => {

  return (
    <>
      <ReviewItem
        review={item.node}
        myReview
      />
      <View style={extraStyles.buttons}>
        <View>
          <Link
            to={`/repository/${item.node.repository.id}`}
            component={Button}
            color={theme.colors.secondary}
            uppercase
            mode='contained'
            style={extraStyles.button}>
            View repository
        </Link>
        </View>
        <View>
          <Button
            color={theme.colors.error}
            uppercase
            mode='contained'
            style={extraStyles.button}
            onPress={() => alert(item.node.id)}
          >
            Delete review
        </Button>
        </View>
      </View>
    </>
  );
};

export default UserReviewItem;