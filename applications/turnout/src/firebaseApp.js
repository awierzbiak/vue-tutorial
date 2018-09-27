import firebase from 'firebase'

const config = {
    apiKey: "your-apikey",
    authDomain: "your-domain",
    databaseURL: "your-database-url",
    projectId: "your-project-id",
    storageBucket: "your-storage-bucket",
    messagingSenderId: "your-sender-id"
};

export const firebaseApp = firebase.initializeApp(config);

export const eventsRef = firebaseApp.database().ref().child('events');