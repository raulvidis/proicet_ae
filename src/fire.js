import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBKNXmEk45oQBYkqa6A-fJKX8olxkJ6-BI",
    authDomain: "proiectae-550b9.firebaseapp.com",
    projectId: "proiectae-550b9",
    storageBucket: "proiectae-550b9.appspot.com",
    messagingSenderId: "139324772277",
    appId: "1:139324772277:web:60977b91514b280693d3fc",
    measurementId: "G-CGHJGQWRZS"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;