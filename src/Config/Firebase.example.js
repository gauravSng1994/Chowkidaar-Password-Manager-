import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default fire;
