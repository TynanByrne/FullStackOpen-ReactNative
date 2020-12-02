import React from 'react';
import { Searchbar as SearchbarComponent } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  searchbar: {
    marginTop: 10,
    marginHorizontal: 20,
    elevation: 0,
  }
})

const Searchbar = ({ searchQuery, onChangeSearch }) => {
  return (
    <SearchbarComponent
      style={styles.searchbar}
      placeholder="Filter"
      onChangeText={onChangeSearch}
      value={searchQuery} />
  );
};

export default Searchbar;