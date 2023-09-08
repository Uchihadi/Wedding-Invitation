// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-IivDb3IRjUjcC7ieaxTHxn7DI7Mltd8",
  authDomain: "wedding-invitation-2aebc.firebaseapp.com",
  projectId: "wedding-invitation-2aebc",
  storageBucket: "wedding-invitation-2aebc.appspot.com",
  messagingSenderId: "1015586349760",
  appId: "1:1015586349760:web:f63c02b3ab2c0821f98325"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();
