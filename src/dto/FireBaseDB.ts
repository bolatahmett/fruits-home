import firebase from 'firebase/app'
import 'firebase/database';
const config = {
    apiKey: "AIzaSyCYRO52bbdnWY-UMW7V9T1kKJB-Tagy-U8",
    authDomain: "fruitshome-c4256.firebaseapp.com",
    databaseURL: "https://fruitshome-c4256-default-rtdb.firebaseio.com",
    projectId: "fruitshome-c4256",
    storageBucket: "fruitshome-c4256.appspot.com",
    messagingSenderId: "644385355213",
    appId: "1:644385355213:web:c13329600b9648bc21c084",
    measurementId: "G-1GZZ1YPEE8"
  };


firebase.initializeApp(config);
const database = firebase.database();

export { database };
export default firebase;    