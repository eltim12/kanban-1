import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDvPLo3LBMduG6zP2sIbMsTTmV6H9WegGc",
    authDomain: "kanban-1205.firebaseapp.com",
    databaseURL: "https://kanban-1205.firebaseio.com",
    projectId: "kanban-1205",
    storageBucket: "kanban-1205.appspot.com",
    messagingSenderId: "617412265725"
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
