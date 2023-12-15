import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, CheckBox } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MenuSelection = () => {
  const navigation = useNavigation();

  const [selectedItems, setSelectedItems] = useState({
    breakfast: false,
    morningSnacks: false,
    lunch: false,
    afternoonSnacks: false,
    dinner: false,
  });

  const handleCheckboxChange = (menuItem) => {
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [menuItem]: !prevSelectedItems[menuItem],
    }));
  };

  const navigateToDay = () => {
    navigation.navigate('Day', { selectedItems }); // Pass selectedItems as navigation param
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Which Meals Do You Usually Have?</Text>
      <Text style={styles.subTitle}>(Mark the options that you most frequently choose)</Text>

      {Object.entries(selectedItems).map(([menuItem, isSelected]) => (
        <View key={menuItem} style={styles.menuItemContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={() => handleCheckboxChange(menuItem)}
            style={styles.checkbox}
          />
          <Text style={styles.menuItemText}>{menuItem}</Text>
        </View>
      ))}

      <TouchableOpacity style={styles.button} onPress={navigateToDay}>
        <Text style={styles.buttonText}>Go to Day Page</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
      },
      subTitle: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
      },
      menuItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      checkbox: {
        alignSelf: 'center',
      },
      menuItemText: {
        marginLeft: 10,
        fontSize: 18,
      },
      button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 8,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
      },
});

export default MenuSelection;
