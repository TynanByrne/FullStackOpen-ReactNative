import React, { useState } from 'react';
import { Divider, Menu, TouchableRipple } from 'react-native-paper';
import { StyleSheet, View, Dimensions } from 'react-native';
import theme from '../../theme';
import Text from '../Text';


const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    height,
    backgroundColor: '#d1d1d1',
  },
  dropdown: {
    display: 'flex',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  menu: {
    width: "75%",
    top: "40%",
    left: "12.5%",
  },
  menuItem: {

  },

})

const DropdownMenu = ({ sort, onPress }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const variablesConverter = (sortType) => {
    let variables;
    switch (sortType) {
      case 'Latest respositories':
        variables = { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
        return variables;
      case 'Highest rated repositories':
        variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
        return variables;
      case 'Lowest rated repositories':
        variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
        return variables;
      default:
        return variables;
    }
  }

  const selectSort = (sortType) => {
    const variables = variablesConverter(sortType);
    onPress(variables, sortType);
    closeMenu();
  }

  return (
    <>
      {/* {visible && <View style={styles.backdrop} />} */}
      <View style={styles.dropdown}>
        <Menu
          style={styles.menu}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <TouchableRipple onPress={openMenu}>
              <Text color='textSecondary'>Sorting: {sort ? sort : 'Latest repositories'}</Text>
            </TouchableRipple>
          }>
          <Menu.Item disabled title='Sort by:' />
          <Divider />
          <Menu.Item
            style={styles.menuItem}
            onPress={() => selectSort('Latest repositories')}
            title='Latest Repositories' />
          <Menu.Item
            style={styles.menuItem}
            onPress={() => selectSort('Highest rated repositories')}
            title='Highest rated repositories' />
          <Menu.Item
            style={styles.menuItem}
            onPress={() => selectSort('Lowest rated repositories')}
            title='Lowest rated repositories' />
        </Menu>
      </View>
    </>
  );
};

export default DropdownMenu;