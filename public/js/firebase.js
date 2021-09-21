// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDzfiMVeHklxMcBIJUrkdoov8Qy9oyHuKc',
  authDomain: 'pwexpress-8ee74.firebaseapp.com',
  databaseURL: 'https://pwexpress-8ee74.firebaseio.com',
  projectId: 'pwexpress-8ee74',
  storageBucket: 'pwexpress-8ee74.appspot.com',
  messagingSenderId: '748566165181',
  appId: '1:748566165181:web:3c22efa638eb38c3d169d4',
  measurementId: 'G-B3L31Q2QHJ',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const settings = { timestampsInSnapshots: true };
db.settings(settings);
