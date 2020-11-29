import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../../theme';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.primary,
  },
  item: {
    backgroundColor: theme.colors.backgroundPrimary,
  }
});

export const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {

  if (!repositories) {
    return null;
  }

  const repositoryNodes = repositories
    ? repositories?.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <Link to={`/repository/${item.id}`} component={TouchableOpacity}>
          <View key={item.id}>
            <RepositoryItem
              fullName={item.fullName}
              description={item.description}
              language={item.language}
              forksCount={item.forksCount}
              stargazersCount={item.stargazersCount}
              ratingAverage={item.ratingAverage}
              reviewCount={item.reviewCount}
              url={item.ownerAvatarUrl}
              style={styles.item}
            />
          </View>
        </Link >
      )}
    />
  );
};

export default RepositoryListContainer;