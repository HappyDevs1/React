import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const config = {
  apiKey: "AIzaSyCQm5Xt7BAa-h72D2pCiQ13CFEAMEp_8X8",
  authDomain: "first-project-ce457.firebaseapp.com",
  projectId: "first-project-ce457",
  storageBucket: "first-project-ce457.appspot.com",
  messagingSenderId: "17576248471",
  appId: "1:17576248471:web:ffdef931d3b42e630d15d2",
  measurementId: "G-369VGDN13Q"
};
firebase.initializeApp(config);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
