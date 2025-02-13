
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AnswerCard = ({ answer }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.answerText}>{answer}</Text>
      <View style={styles.voteContainer}>
        <Button title="Upvote" onPress={() => {}} />
        <Button title="Downvote" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F9F9F9',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  answerText: {
    fontSize: 16,
    color: '#555',
  },
  voteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default AnswerCard;
    