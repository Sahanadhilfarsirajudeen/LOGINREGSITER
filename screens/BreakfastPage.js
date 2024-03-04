import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { Icon, Overlay } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BreakfastPage = () => {
  const [isAlternativeVisible, setAlternativeVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [scrollX] = useState(new Animated.Value(0)); // Track scroll position

  const openAlternative = () => setAlternativeVisible(true);
  const closeAlternative = () => setAlternativeVisible(false);
  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const navigateToPage = (page) => {
    navigation.navigate(page);
    closeMenu(); // Close the menu after navigation
  };

  const handleLogout = async () => { // Update to async function
    try {
      // Remove authentication token from AsyncStorage
      await AsyncStorage.removeItem('authToken');
      
      // Navigate the user to the login page
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error while logging out:', error);
    }
  };

  const breakfastIngredients = [
    'Yoghurt bowl with fruits: ',
    '1.  Natural yogurt - 1 cup(200g)',
    '2.  Muesli - 2 spoons(40g)',
    '3.  Seeds - 1 spoon(20g)',
    '4.  Fresh fruits - 1 cup(200g)',
  ];

  const mealOptions = [
    { name: 'Account Information', onPress: () => navigateToPage('AccountSettingsPage') },
    { name: 'Meal Plan', onPress: () => navigateToPage('Day') },
    { name: 'Terms and Conditions', onPress: () => navigateToPage('TermsAndConditions') },
    { name: 'Logout', onPress: handleLogout },
  ];

  const handleNavigation = (meal) => {
    navigation.navigate(meal);
  };

  const handleDateNavigation = (direction) => {
    const newDate = new Date(currentDate);
    if (direction === 'yesterday') {
      newDate.setDate(currentDate.getDate() - 1);
    } else if (direction === 'tomorrow') {
      newDate.setDate(currentDate.getDate() + 1);
    }
    setCurrentDate(newDate);
  };

  const renderMealOptions = () => {
    return mealOptions.map((option, index) => (
      <TouchableOpacity key={index} onPress={option.onPress} style={styles.mealOption}>
        <Text style={styles.mealOptionText}>{option.name}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={() => handleDateNavigation('yesterday')}>
          <Text style={styles.navigationText}>Yesterday</Text>
        </TouchableOpacity>
        <Text style={styles.dateText}>{currentDate.toDateString()}</Text>
        <TouchableOpacity onPress={() => handleDateNavigation('tomorrow')}>
          <Text style={styles.navigationText}>Tomorrow</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.mealOptionsContainer}>{renderMealOptions()}</View>
      </ScrollView>

      <Text style={styles.title}>Breakfast</Text>

      <ScrollView>
        <Image source={require("../assets/snacks2.jpg")} style={{ width: 200, height: 200, alignSelf: 'center' }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Yoghurt bowl with fruits</Text>
          <View style={styles.ingredientsContainer}>
            {breakfastIngredients.map((ingredient, index) => (
              <Text key={index}>{ingredient}</Text>
            ))}
          </View>
        </View>
        <TouchableOpacity onPress={openAlternative} style={styles.swipeButton}>
          <Text style={styles.swipeButtonText}>Swipe to see other options</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.bottomIconsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="settings" size={30} color="black" onPress={openMenu} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="calendar" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="apple" type="font-awesome-5" size={30} color="black" />
        </TouchableOpacity>
      </View>

      <Overlay isVisible={isMenuVisible} onBackdropPress={closeMenu}>
        <View style={styles.menuContainer}>
          {renderMealOptions()}
        </View>
      </Overlay>

      <Overlay isVisible={isAlternativeVisible} onBackdropPress={closeAlternative}>
        <Text>Alternative Option 1</Text>
        <Text>Alternative Option 2</Text>
        <Text>Alternative Option 3</Text>
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF', // Light blue background color
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  navigationText: {
    fontSize: 16,
    color: 'blue',
  },
  mealOptionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  mealOption: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    backgroundColor: 'lightblue',
    marginRight: 10,
  },
  mealOptionText: {
    fontSize: 16,
    color: 'black',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    alignSelf: 'center', // Align title to center
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  ingredientsContainer: {
    padding: 10,
  },
  swipeButton: {
    alignItems: 'center',
    marginVertical: 20,
  },
  swipeButtonText: {
    fontSize: 18,
    color: 'blue',
  },
  bottomIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  iconButton: {
    alignItems: 'center',
  },
  menuContainer: {
    padding: 20,
  },
  menuItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default BreakfastPage;
