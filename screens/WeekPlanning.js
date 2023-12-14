import React from 'react';
import { View, Text, StyleSheet, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const WeekPlanning = ({ isVisible, onClose }) => {
  const weekPlan = [
    {
      day: 'Monday',
      breakfast: ['Coffee gr', 'A piece of fruit (two if small) gr'],
      lunch: [
        'Carpaccio di pesce gr 100',
        'Bread gr 50',
        'Vegetables gr 200',
        'A piece of fruit (two if small) gr',
      ],
      snack2: ['A cup of milk with coffee gr 200'],
      dinner: ['Peppers and shrimp rice (see recipes)', 'Vegetables gr 200', 'A piece of fruit (two if small) gr'],
      oliveOil: 'Daily amount of extra virgin olive oil (excluding recipes) spoons 2',
    },
    {
      day: 'Tuesday',
      breakfast: ['Coffee gr', 'Nuts (walnuts, almonds, etc.) gr 30'],
      lunch: [
        'Vegetables and egg pie see recipes',
        'Bread gr 50',
        'Vegetables gr 200',
        'A piece of fruit (two if small) gr',
      ],
      snack2: ['A cup of milk with coffee gr 200'],
      dinner: [
      'Minestra di riso e zucca see recipes',
      'Vegetables gr 200',
      'A piece of fruit (two if small) gr',
      ],
      oliveOil: 'Daily amount of extra virgin olive oil (excluding recipes) spoons 2',
    },
    {
      day: 'Wednesday',
      breakfast: ['Coffee gr', 'Nuts (walnuts, almonds, etc.) gr 30'],
      lunch: [
        'Vegetables and egg pie see recipes',
        'Bread gr 50',
        'Vegetables gr 200',
        'A piece of fruit (two if small) gr',
      ],
      snack2: ['A cup of milk with coffee gr 200'],
      dinner: [
      'Minestra di riso e zucca see recipes',
      'Vegetables gr 200',
      'A piece of fruit (two if small) gr',
      ],
      oliveOil: 'Daily amount of extra virgin olive oil (excluding recipes) spoons 2',
    },
    {
      day: 'Thursday',
      breakfast: ['Coffee gr', 'Nuts (walnuts, almonds, etc.) gr 30'],
      lunch: [
        'Vegetables and egg pie see recipes',
        'Bread gr 50',
        'Vegetables gr 200',
        'A piece of fruit (two if small) gr',
      ],
      snack2: ['A cup of milk with coffee gr 200'],
      dinner: [
      'Minestra di riso e zucca see recipes',
      'Vegetables gr 200',
      'A piece of fruit (two if small) gr',
      ],
      oliveOil: 'Daily amount of extra virgin olive oil (excluding recipes) spoons 2',
    },
    {
      day: 'Friday',
      breakfast: ['Coffee gr', 'Nuts (walnuts, almonds, etc.) gr 30'],
      lunch: [
        'Vegetables and egg pie see recipes',
        'Bread gr 50',
        'Vegetables gr 200',
        'A piece of fruit (two if small) gr',
      ],
      snack2: ['A cup of milk with coffee gr 200'],
      dinner: [
      'Minestra di riso e zucca see recipes',
      'Vegetables gr 200',
      'A piece of fruit (two if small) gr',
      ],
      oliveOil: 'Daily amount of extra virgin olive oil (excluding recipes) spoons 2',
    },
    {
      day: 'Saturday',
      breakfast: ['Coffee gr', 'Nuts (walnuts, almonds, etc.) gr 30'],
      lunch: [
        'Vegetables and egg pie see recipes',
        'Bread gr 50',
        'Vegetables gr 200',
        'A piece of fruit (two if small) gr',
      ],
      snack2: ['A cup of milk with coffee gr 200'],
      dinner: [
      'Minestra di riso e zucca see recipes',
      'Vegetables gr 200',
      'A piece of fruit (two if small) gr',
      ],
      oliveOil: 'Daily amount of extra virgin olive oil (excluding recipes) spoons 2',
    },
    {
      day: 'Sunday',
      breakfast: ['Coffee gr', 'Nuts (walnuts, almonds, etc.) gr 30'],
      lunch: [
        'Vegetables and egg pie see recipes',
        'Bread gr 50',
        'Vegetables gr 200',
        'A piece of fruit (two if small) gr',
      ],
      snack2: ['A cup of milk with coffee gr 200'],
      dinner: [
      'Minestra di riso e zucca see recipes',
      'Vegetables gr 200',
      'A piece of fruit (two if small) gr',
      ],
      oliveOil: 'Daily amount of extra virgin olive oil (excluding recipes) spoons 2',
    },
    
    // Repeat the structure for other days
    // ...
  ];

  const tableHead = ['Day', 'Breakfast', 'Lunch', 'Snack 2', 'Dinner', 'Olive Oil'];
  const tableData = weekPlan.map(dayPlan => [
    dayPlan.day,
    dayPlan.breakfast.join('\n'),
    dayPlan.lunch.join('\n'),
    dayPlan.snack2.join('\n'),
    dayPlan.dinner.join('\n'),
    dayPlan.oliveOil,
  ]);

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
        
      </TouchableWithoutFeedback>
      <View style={styles.container}>
        <Text style={styles.title}>Week Planering</Text>
        <ScrollView style={styles.scrollContainer}>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
            <Row data={tableHead} style={styles.head} textStyle={styles.text} />
          </Table>
          <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
            <Rows data={tableData} textStyle={styles.text} />
          </Table>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    marginTop: 'auto',
    backgroundColor: 'white',
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
  scrollContainer: {
    flex: 1,
  },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6, textAlign: 'center' },
});

export default WeekPlanning;
