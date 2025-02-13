
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AnswerCard from './AnswerCard';
import { firebase } from '../firebaseConfig';

const AnswerScreen = ({ route }) => {
  const { questionId } = route.params;
  const [answer, setAnswer] = useState('');

  const handleSubmit = async () => {
    if (answer.trim()) {
      await firebase.firestore().collection('answers').add({
        questionId,
        answer,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      setAnswer('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Answers</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your answer"
        value={answer}
        onChangeText={setAnswer}
      />
      <Button title="Submit Answer" onPress={handleSubmit} />
      <AnswerCard answer={answer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default AnswerScreen;
    