import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, ImageBackground, CheckBox } from 'react-native';

const FirstPage = ({ isVisible, onClose }) => {
  // List of snacks
  const mealsList = [
    'Breakfast',
    'Morning Snacks',
    'Lunch',
    'Afternoon Snacks',
    'Dinner',
    'Evening Snacks',
  ];

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          {/* Background Image */}
          <ImageBackground source={require("../assets/fooddiet.jpg")} style={styles.backgroundImage}>
            {/* Modal Container */}
            <View style={styles.container}>
              {/* Title */}
              <Text style={styles.title}>Which Meals Do You Usually Have ?
              <h6>(Mark the options that you most frequently choose)</h6>
              </Text>

              {/* Snacks List */}
              {mealsList.map((snack, index) => (
                <View key={index} style={styles.snackItem}>
                  <CheckBox />
                  <Text style={styles.snackText}>{snack}</Text>
                </View>
              ))}
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
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    marginTop: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Adjust the opacity as needed
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
});

export default FirstPage;
