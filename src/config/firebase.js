// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDYajQj0ECWr7WcxE9F-O54V0eIoRHx8D4',
  authDomain: 'vimchat-c0130.firebaseapp.com',
  databaseURL: 'https://vimchat-c0130-default-rtdb.firebaseio.com',
  projectId: 'vimchat-c0130',
  storageBucket: 'vimchat-c0130.appspot.com',
  messagingSenderId: '2890931032',
  appId: '1:2890931032:web:1719e2caad9622018ca32d',
  measurementId: 'G-MZFJ6DK7RL',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const storage = getStorage(app)
