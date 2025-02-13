
# React Native QA App

This is a simple QA app built with React Native, designed to allow users to ask and answer questions. The app includes a Firebase backend for storing questions and answers. 

## Features

- **Home Screen**: Displays a list of questions.
- **Add Question**: Allows users to submit new questions.
- **Answer Screen**: Users can submit answers to questions.
- **Firebase Integration**: All questions and answers are stored in Firebase.

## Installation

1. Clone the repository:
   ```
   git clone <repository_url>
   ```

2. Navigate to the project directory:
   ```
   cd <project_directory>
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the app:
   - For iOS: `npx react-native run-ios`
   - For Android: `npx react-native run-android`

## Firebase Setup

1. Set up a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Add Firebase SDK configuration to the app by updating the `firebaseConfig.js` file with your Firebase project credentials.

## License

This project is open source and available under the MIT License.
