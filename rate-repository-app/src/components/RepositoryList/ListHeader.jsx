import React from 'react';
import DropdownMenu from './DropdownMenu';
import { StyleSheet } from 'react-native';
import theme from '../../theme';
import Searchbar from './Searchbar';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.backgroundGreyed,
    color: theme.colors.backgroundPrimary,
    flex: 1,
  },
})

const ListHeader = ({ sort, onPress, onChangeSearch, searchQuery }) => {
  return (
    <>
      <Searchbar searchQuery={searchQuery} onChangeSearch={onChangeSearch} />
      <DropdownMenu sort={sort} onPress={onPress} />
    </>
  );
};

export default ListHeader;