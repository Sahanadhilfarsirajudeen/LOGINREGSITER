import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, ImageBackground, CheckBox, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FirstPage = ({ isVisible, onClose }) => {
  const navigation = useNavigation();

  // List of meals and days
  const mealsList = [
    'Breakfast',
    'Morning Snacks',
    'Lunch',
    'Afternoon Snacks',
    'Dinner',
    'Evening Snacks',
  ];

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday'];

  // State to keep track of selected items for each day
  const [selectedItems, setSelectedItems] = useState({});
  const [selectedDay, setSelectedDay] = useState(null); // Add this line

  const toggleItemSelection = (meal) => {
    // Copy the current selected items
    const updatedSelectedItems = { ...selectedItems };

    // Toggle the selection for the given meal and day
    if (updatedSelectedItems[selectedDay]) {
      if (updatedSelectedItems[selectedDay].includes(meal)) {
        updatedSelectedItems[selectedDay] = updatedSelectedItems[selectedDay].filter((item) => item !== meal);
      } else {
        updatedSelectedItems[selectedDay] = [...updatedSelectedItems[selectedDay], meal];
      }
    } else {
      updatedSelectedItems[selectedDay] = [meal];
    }

    setSelectedItems(updatedSelectedItems);
  };
  
  const navigateToDinner = () => {
    navigation.navigate('Dinner');
  };

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <ImageBackground source={require("../assets/fooddiet.jpg")} style={styles.backgroundImage}>
            <View style={styles.container}>
              <Text style={styles.title}>Which Meals Do You Usually Have?</Text>
              <Text style={styles.subTitle}>(Mark the options that you most frequently choose)</Text>

              {mealsList.map((meal, mealIndex) => (
                <View key={mealIndex} style={styles.snackItem}>
                  <CheckBox
                    value={selectedItems[selectedDay]?.includes(meal) || false}
                    onValueChange={() => toggleItemSelection(meal)}
                  />
                  <Text style={styles.snackText}>{meal}</Text>
                </View>
              ))}

              <Text style={styles.daysTitle}>Days</Text>

              {daysOfWeek.map((day, dayIndex) => (
                <TouchableOpacity key={dayIndex} style={styles.dayButton} onPress={() => setSelectedDay(day)}>
                  <Text style={styles.dayButtonText}>{day}</Text>
                  {selectedItems[day] && (
                    <Text style={styles.selectedItemsText}>
                      {selectedItems[day].join(', ')}
                    </Text>
                  )}
                </TouchableOpacity>
              ))}

<TouchableOpacity style={styles.nextButton} onPress={navigateToDinner}>
  <Text style={styles.buttonText}>Next</Text>
</TouchableOpacity>

            </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    marginTop: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
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
  snackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  snackText: {
    marginLeft: 10,
    fontSize: 16,
  },
  daysTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  dayButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#3498db',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dayButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  selectedItemsText: {
    fontSize: 14,
    color: 'black',
  },
  nextButton: {
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

export default FirstPage;
