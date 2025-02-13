
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { firebase } from '../firebaseConfig';

const SubmitQuestionScreen = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const submitQuestion = () => {
    const questionsRef = firebase.firestore().collection('questions');
    questionsRef.add({
      question,
      answers: [{ answer, votes: 0 }],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
      .then(() => {
        console.log('Question submitted');
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Ask a question"
        value={question}
        onChangeText={setQuestion}
      />
      <TextInput
        placeholder="Your answer"
        value={answer}
        onChangeText={setAnswer}
      />
      <Button title="Submit Question" onPress={submitQuestion} />
    </View>
  );
};

export default SubmitQuestionScreen;
