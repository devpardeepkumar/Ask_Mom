
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { firebase } from '../firebaseConfig';
import QuestionList from './QuestionList';

const HomeScreen = ({ navigation }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionsRef = firebase.firestore().collection('questions');
      const snapshot = await questionsRef.get();
      setQuestions(snapshot.docs.map(doc => doc.data()));
    };

    fetchQuestions();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Questions</Text>
      <Button title="Add Question" onPress={() => navigation.navigate('AddQuestion')} />
      <ScrollView style={styles.questionList}>
        <QuestionList questions={questions} />
      </ScrollView>
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
  questionList: {
    marginTop: 10,
  },
});

export default HomeScreen;
    