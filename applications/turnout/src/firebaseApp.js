import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCvpvfheYVR9Djk3aQ4k6pssPciBiBrKx0",
    authDomain: "turnout-e6778.firebaseapp.com",
    databaseURL: "https://turnout-e6778.firebaseio.com",
    projectId: "turnout-e6778",
    storageBucket: "turnout-e6778.appspot.com",
    messagingSenderId: "429640650982"
};

export const firebaseApp = firebase.initializeApp(config);

export const eventsRef = firebaseApp.database().ref().child('events');