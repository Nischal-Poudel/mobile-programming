// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// initializeApp – to initialize your Firebase app.
// getDatabase – to get a reference to the Firebase Realtime Database.
// set – to write data to the database.
// get – to read data from the database.
// ref – to create references (paths) in the database.

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

//Function to write user data to Firebase Realtime Database
function writeUserData(
  userId,
  firstname,
  lastname,
  gender,
  age,
  email,
  phone,
  address,
  city,
  country,
) {
  // Get the database instance
  // const db = getDatabase();

  // Create a reference/points to 'users/{userId}' and set the data (name and email)
  set(ref(db, "users/" + userId), {
    firstname: firstname,
    lastname: lastname,
    gender: gender,
    age: age,
    email: email,
    phone: phone,
    address: address,
    city: city,
    country: country,
  });
}
// writeUserData(
//   1,
//   "Prabesh",
//   "Neupane",
//   "Male",
//   23,
//   "Prabesh.neupane@example.com",
//   "123-456-7890",
//   "123 Main St",
//   "New York",
//   "USA",
// );

// ref(db, 'users') points to the users path.
// get(userRef) gets the data at that path.
// snapshot.forEach(...) loops over each child node (each user).
// childsnapshot.val() gives the actual data (name and email), which is printed.
function readUser() {
  const userRef = ref(db, "users");

  get(userRef).then((snapshot) => {
    snapshot.forEach((childsnapshot) => {
      console.log(childsnapshot.val());
    });
  });
}
// readUser();

function updateUserData(userId, updatedData) {
  const userRef = ref(db, "users/" + userId);
  update(userRef, updatedData)
    .then(() => {
      console.log("User updated successfully");
    })
    .catch((error) => {
      console.error("Error updating user:", error);
    });
}
// Example usage:
// updateUserData(1, { firstname: "Abi", lastname: "Khanal" });

function deleteUserData(userId) {
  const userRef = ref(db, "users/" + userId);
  remove(userRef)
    .then(() => {
      console.log("User deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting user:", error);
    });
}

// // // // // // // // // // Example usage:
// deleteUserData(1);

// //console.log("Added! Good")
