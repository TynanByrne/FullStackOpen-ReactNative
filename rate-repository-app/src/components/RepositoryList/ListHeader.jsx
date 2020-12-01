import React from 'react';
import { Provider } from 'react-native-paper';
import DropdownMenu from './DropdownMenu';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';

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

const ListHeader = ({ sort, onPress }) => {
  return (
    <>
        <DropdownMenu sort={sort} onPress={onPress} />
    </>
  );
};

export default ListHeader;