import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js'

const firebaseConfig = {
  apiKey: 'AIzaSyC1QZxEb3eE3XARjFHnnmiiVJH649KrnhE',
  authDomain: 'academicproject-96b39.firebaseapp.com',
  databaseURL: 'https://academicproject-96b39-default-rtdb.firebaseio.com',
  projectId: 'academicproject-96b39',
  storageBucket: 'academicproject-96b39.appspot.com',
  messagingSenderId: '166037609025',
  appId: '1:166037609025:web:f04556c49d1f30826ac4c0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export default app
