import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Picker } from 'react-native';
import { Header, Icon, Overlay } from 'react-native-elements';
import CustomHeader from './CustomHeader';
import { useNavigation } from '@react-navigation/native';

function getCurrentDateAndDay() {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return currentDate.toLocaleDateString(undefined, options);
}

const HomePage = () => {
  const [selectedBreakfastCategory, setSelectedBreakfastCategory] = useState(null);
  const [selectedSnacksCategory, setSelectedSnacksCategory] = useState(null);
  const [selectedLunchCategory, setSelectedLunchCategory] = useState(null);
  const [selectedSnacks2Category, setSelectedSnacks2Category] = useState(null);
  const [selectedDinnerCategory, setSelectedDinnerCategory] = useState(null);

  const [isDagensMenuVisible, setDagensMenuVisible] = useState(false);

  const [isSubMenuVisible, setSubMenuVisible] = useState(false);
  const [selectedDagensMenuItem, setSelectedDagensMenuItem] = useState(null);

  const navigation = useNavigation();

  const breakfastCategories = [
    'A cup of milk (200 ml)',
    'A cup of unsweetened vegetal milk (oat, soy, rice, almond) (200 ml)',
    'Unsweetened breakfast cereals (20 g), muesli (20 g), or rolled oats',
    'Unsweetened low-fat yoghurt (or low-fat Greek yoghurt)',
    'A piece of fruit (or two small ones)',
    'Unsalted nuts (walnuts, almonds, etc.) (30 g)',
    'A glass of a freshly-made smoothie',
    'An orange squash (with lime and/or lemon)',
    'Unsweetened dried fruit (apricots, figs, etc.) (30 g)',
    'A glass of unsweetened fruit juice',
    'Chickpea pancakes with jam',
    'Some vegetables',
  ];

  const snacksCategories = [
    'A piece of fruit (150 g)',
    'Unsalted nuts (walnuts, almonds, etc.) (30 g)',
    'A jar of sugar-free plain yogurt (125 g) with a spoonful of berries',
    'Lupins (30 g)',
    'A cup of tea with milk (regular or vegetal)',
    'A hard-boiled egg',
    'A glass of unsweetened vegetal milk',
  ];

  const lunchCategories = ['Lunch Option 1', 'Lunch Option 2', 'Lunch Option 3'];
  const snacks2Categories = ['Snack Option 1', 'Snack Option 2', 'Snack Option 3'];
  const dinnerCategories = ['Snack Option 1', 'Snack Option 2', 'Snack Option 3'];

  const toggleDagensMenu = () => {
    setDagensMenuVisible(!isDagensMenuVisible);
    // Ensure the submenu is closed when toggling Dagens Menu.
    if (isSubMenuVisible) {
      toggleSubMenu();
    }
  };

  const toggleSubMenu = () => setSubMenuVisible(!isSubMenuVisible);

  const dateAndDay = getCurrentDateAndDay();

  const navigateToPreviousPage = () => {
    navigation.navigate('Welcome');
  };

  const navigateToNextPage = () => {
    navigation.navigate('BreakfastPage');
  };

  const navigateToMenuSelection = () => {
    navigation.navigate('MenuSelection');
  };
  const navigateToWeekPlanning = () => {
    navigation.navigate('WeekPlanning');
  };
  const dagensMenuItems = ['Dagens Menu'];
  const subMenuItems = ['Breakfast', 'Snacks1', 'Lunch', 'Snacks2', 'Dinner'];

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={toggleDagensMenu}>
              <Icon name="menu" color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToPreviousPage}>
              <Icon name="arrow-back" color="white" />
            </TouchableOpacity>
          </View>
        }
        rightComponent={
          <TouchableOpacity onPress={navigateToNextPage}>
            <Icon name="arrow-forward" color="white" />
          </TouchableOpacity>
        }
        centerComponent={<CustomHeader dateAndDay={dateAndDay} />}
      />

      <ScrollView>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Breakfast Menu</Text>
        <Picker
          selectedValue={selectedBreakfastCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedBreakfastCategory(itemValue)}
        >
          <Picker.Item label="Select a breakfast item" value={null} />
          {breakfastCategories.map((category, index) => (
            <Picker.Item label={category} value={category} key={index} />
          ))}
        </Picker>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Snacks Menu</Text>
        <Picker
          selectedValue={selectedSnacksCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedSnacksCategory(itemValue)}
        >
          <Picker.Item label="Select a snacks item" value={null} />
          {snacksCategories.map((category, index) => (
            <Picker.Item label={category} value={category} key={index} />
          ))}
        </Picker>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Lunch Menu</Text>
        <Picker
          selectedValue={selectedLunchCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedLunchCategory(itemValue)}
        >
          <Picker.Item label="Select a lunch item" value={null} />
          {lunchCategories.map((category, index) => (
            <Picker.Item label={category} value={category} key={index} />
          ))}
        </Picker>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Snacks2 Menu</Text>
        <Picker
          selectedValue={selectedSnacks2Category}
          onValueChange={(itemValue, itemIndex) => setSelectedSnacks2Category(itemValue)}
        >
          <Picker.Item label="Select a Snacks2 item" value={null} />
          {snacks2Categories.map((category, index) => (
            <Picker.Item label={category} value={category} key={index} />
          ))}
        </Picker>
        <Text style={{ fontSize: 20, marginTop: 10 }}>Dinner Menu</Text>
        <Picker
          selectedValue={selectedDinnerCategory}
          onValueChange={(itemValue, itemIndex) => setSelectedDinnerCategory(itemValue)}
        >
          <Picker.Item label="Select a Dinner item" value={null} />
          {dinnerCategories.map((category, index) => (
            <Picker.Item label={category} value={category} key={index} />
          ))}
        </Picker>
        <TouchableOpacity onPress={navigateToMenuSelection} style={{ alignItems: 'center', margin: 20 }}>
          <Text style={{ fontSize: 18, color: 'blue' }}>Go to Menu Selection</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToWeekPlanning} style={{ alignItems: 'center', margin: 20 }}>
          <Text style={{ fontSize: 18, color: 'blue' }}>Go to WeekPlanning</Text>
        </TouchableOpacity>
      </ScrollView>

      {isDagensMenuVisible && (
        <Overlay
          isVisible={isDagensMenuVisible}
          onBackdropPress={toggleDagensMenu}
          overlayStyle={{ width: '80%', height: '80%', padding: 20 }}
        >
          <View>
            {dagensMenuItems.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedDagensMenuItem(item);
                  toggleSubMenu();
                }}
              >
                <Text style={{ fontSize: 18, color: 'blue' }}>
                  {item}{' '}
                  {isSubMenuVisible ? (
                    <Icon name="angle-up" type="font-awesome" />
                  ) : (
                    <Icon name="angle-down" type="font-awesome" />
                  )}
                </Text>
              </TouchableOpacity>
            ))}
            {isSubMenuVisible &&
              subMenuItems.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => navigation.navigate('LunchPage')}>
                  <Text style={{ fontSize: 18, color: 'blue' }}>{item}</Text>
                </TouchableOpacity>
              ))
            }
          </View>
        </Overlay>
      )}
    </View>
  );
};

export default HomePage;
