
import React from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { firebase } from '../firebaseConfig';

const HomeScreen = ({ navigation }) => {
  const [questions, setQuestions] = React.useState([]);

  // Fetch questions from Firestore
  React.useEffect(() => {
    const fetchQuestions = async () => {
      const snapshot = await firebase.firestore().collection('questions').get();
      setQuestions(snapshot.docs.map(doc => doc.data()));
    };

    fetchQuestions();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.questionText}>{item.question}</Text>
      <FlatList
        data={item.answers}
        renderItem={({ item }) => (
          <View style={styles.answerCard}>
            <Text style={styles.answerText}>{item.answer}</Text>
            <View style={styles.voteContainer}>
              <Button title="Upvote" onPress={() => {}} />
              <Button title="Downvote" onPress={() => {}} />
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ask Mom</Text>
      <TextInput
        placeholder="Ask your question here..."
        style={styles.questionInput}
      />
      <Button
        title="Submit Question"
        onPress={() => navigation.navigate('SubmitQuestion')}
      />
      <FlatList
        data={questions}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  questionInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  answerCard: {
    backgroundColor: '#F1F1F1',
    marginTop: 10,
    padding: 10,
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

export default HomeScreen;
