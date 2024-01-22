import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

 const DinnerPage = () => {
  const handleChangeDish = () => {
    // Handle the action when the user clicks "Change the Dish"
    // You can implement logic to change the dish or navigate to another page.
    console.log('Change the Dish clicked!');
  };

  return (
    <ImageBackground source={require('../assets/img3.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Dinner</Text>

        {/* Vegetable */}
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>Vegetable (200 grams)</Text>
        </View>

        {/* Main Dish */}
        <TouchableOpacity style={styles.mainDishButton} onPress={handleChangeDish}>
          <Text style={styles.buttonText}>Main Dish</Text>
        </TouchableOpacity>

        {/* Fruits */}
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>(One piece of Fruits - 150 grams)</Text>
        </View>

        {/* Image */}
        <Image source={require('../assets/snacks.jpg')} style={styles.image} />

        {/* "Change the Dish" button */}
        <TouchableOpacity style={styles.button} onPress={handleChangeDish}>
          <Text style={styles.buttonText}>Change the Dish</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  optionContainer: {
    marginBottom: 20,
  },
  optionTitle: {
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  mainDishButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    width: 150,
  },
});

export default DinnerPage;
