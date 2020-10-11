import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyCmAhxJpX4dEiAE426zH63SgHtWp4dsUy0",
    authDomain: "messenger-dd055.firebaseapp.com",
    databaseURL: "https://messenger-dd055.firebaseio.com",
    projectId: "messenger-dd055",
    storageBucket: "messenger-dd055.appspot.com",
    messagingSenderId: "137558844282",
    appId: "1:137558844282:web:4964245dff0693f7516cc3",
    measurementId: "G-SSEYLY7FGD"

})

const db = firebaseApp.firestore();

export default db;