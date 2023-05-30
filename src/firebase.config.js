import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyB2TRTJnd2y-P1tZPldj_HdoNoCWsd-7no",
    authDomain: "restaurantapp1-5d32b.firebaseapp.com",
    databaseURL: "https://restaurantapp1-5d32b-default-rtdb.firebaseio.com",
    projectId: "restaurantapp1-5d32b",
    storageBucket: "restaurantapp1-5d32b.appspot.com",
    messagingSenderId: "661020879463",
    appId: "1:661020879463:web:4f69a20a59fb76268302c2"
  };

  const app= getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore (app);
  const storage = getStorage(app);

  export { app, firestore, storage }