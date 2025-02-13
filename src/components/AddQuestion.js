
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { firebase } from '../firebaseConfig';

const AddQuestion = ({ navigation }) => {
  const [question, setQuestion] = useState('');

  const handleSubmit = async () => {
    if (question.trim()) {
      await firebase.firestore().collection('questions').add({
        question,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your question"
        value={question}
        onChangeText={setQuestion}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
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

export default AddQuestion;
    