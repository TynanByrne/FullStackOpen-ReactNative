import React, { useState } from 'react';
import { Divider, Menu, TouchableRipple } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import theme from '../../theme';
import Text from '../Text';

const styles = StyleSheet.create({
  dropdown: {
    display: 'flex',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.secondary,
    color: theme.colors.backgroundPrimary
  },
  menuItem : {

  },


})

const DropdownMenu = ({ sort }) => {
  const [visible, setVisible] = useState(false);


  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const selectSort = (sortType) => {
    closeMenu();
  }


  return (
    <>
      <Menu
        style={styles.dropdown}
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <TouchableRipple onPress={openMenu}>
            <Text color='secondary'>{sort ? sort : 'Latest repositories'}</Text>
          </TouchableRipple>
        }>
        <Menu.Item disabled={true} title='Sort by:' />
        <Divider />
        <Menu.Item
          style={styles.menuItem}
          /* onPress={selectSort('Latest repositories')} */
          title='Latest Repositories' />
        <Menu.Item
          style={styles.menuItem}
          /* onPress={selectSort('Highest rated repositories')} */
          title='Highest rated repositories' />
        <Menu.Item
          style={styles.menuItem}
          /* onPress={selectSort('Lowest rated repositories')} */
          title='Lowest rated repositories' />
      </Menu>
    </>
  );
};

export default DropdownMenu;