
import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const QuestionList = ({ questions }) => {
  return (
    <FlatList
      data={questions}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.questionText}>{item.question}</Text>
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  questionText: {
    fontSize: 18,
    color: '#333',
  },
});

export default QuestionList;
    