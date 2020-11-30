import React from 'react';
import { Provider } from 'react-native-paper';
import DropdownMenu from './DropdownMenu';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'column',
    padding: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.backgroundGreyed,
    color: theme.colors.backgroundPrimary
  },
})

const ListHeader = ({ sort, setSort }) => {
  return (
    <Provider>
      <View style={styles.header}>
        <DropdownMenu />
      </View>
    </Provider>
  );
};

export default ListHeader;