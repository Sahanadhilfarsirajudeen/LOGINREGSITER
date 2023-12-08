import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Dinner = () => {
  const navigation = useNavigation();

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const navigateToBreakfastPage = () => {
    navigation.navigate('BreakfastPage');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Day Meal</Text>
      {daysOfWeek.map((day, index) => (
        <TouchableOpacity key={index} style={styles.dayButton} onPress={navigateToBreakfastPage}>
          <Text style={styles.dayButtonText}>{day}</Text>
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

export default Dinner;
