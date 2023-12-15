import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Day = ({ route }) => {
  const navigation = useNavigation();

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Initialize state to keep track of selected items for each day
  const [selectedItemsByDay, setSelectedItemsByDay] = useState({
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
    Sunday: [],
  });

  // Function to navigate to the next page with accumulated selected items
  const navigateToBreakfastPage = () => {
    const selectedItems = Object.values(selectedItemsByDay).flatMap((items) => items);
    navigation.navigate('BreakfastPage', { selectedItems });
  };

  // Function to update selected items for a specific day
  const handleDayPress = (day) => {
    navigation.navigate('MenuSelection', {
      selectedItemsByDay,
      selectedDay: day,
      updateSelectedItems: (selectedItems) => {
        //setSelectedItemsByDay((prevSelectedItems) => ({
         // ...prevSelectedItems,
          //[day]: selectedItems,
        //}
        //)
        //);
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Day Meal</Text>
      {daysOfWeek.map((day, index) => (
        <TouchableOpacity
          key={index}
          style={styles.dayButton}
          onPress={() => handleDayPress(day)}
        >
          <Text style={styles.dayButtonText}>{day}</Text>
          {selectedItemsByDay[day].length > 0 && (
            <Text style={styles.selectedItemsText}>
              {selectedItemsByDay[day].join(', ')}
            </Text>
          )}
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.nextButton} onPress={navigateToBreakfastPage}>
        <Text style={styles.buttonText}>Next</Text>
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
    marginBottom: 20,
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
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
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

export default Day;