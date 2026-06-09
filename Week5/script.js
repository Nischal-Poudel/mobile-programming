// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHfhFgQIY768qhOgqg9okA23pqWoBkrcs",
  authDomain: "mobile-programming-e87c3.firebaseapp.com",
  projectId: "mobile-programming-e87c3",
  storageBucket: "mobile-programming-e87c3.firebasestorage.app",
  messagingSenderId: "201010192362",
  appId: "1:201010192362:web:c9f16150ef098d0f5c5c93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log(db);
