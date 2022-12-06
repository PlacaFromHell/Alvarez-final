import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/Assets/index.css';
import App from './App';

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAkejYY247QMGeLvUZeJ2wbZe80gk8VrDc",

  authDomain: "el-club-de-la-alpargata-fde0c.firebaseapp.com",

  projectId: "el-club-de-la-alpargata-fde0c",

  storageBucket: "el-club-de-la-alpargata-fde0c.appspot.com",

  messagingSenderId: "596892235821",

  appId: "1:596892235821:web:7a856bbccd3110df4c20a4"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);






