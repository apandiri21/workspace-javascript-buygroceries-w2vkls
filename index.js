// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  const firebaseConfig = {
  apiKey: "AIzaSyBxp6X1OSsbS_VRxIlZDXC3cLE1OffbKCE",
  authDomain: "grocerylist-6f38e.firebaseapp.com",
  databaseURL: "https://grocerylist-6f38e.firebaseio.com",
  projectId: "grocerylist-6f38e",
  storageBucket: "grocerylist-6f38e.appspot.com",
  messagingSenderId: "389435855205",
  appId: "1:389435855205:web:2667f96e169ad872cc918c",
  measurementId: "G-MTSB5QWTT1"
};
};

firebase.initializeApp(firebaseConfig);



// Save the list to database

