import * as firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCJaCPqnFQAdaNYKK10SzNFbJJsBOnPmGU",
  authDomain: "photowall-d1f7a.firebaseapp.com",
  databaseURL: "https://photowall-d1f7a.firebaseio.com",
  projectId: "photowall-d1f7a",
  storageBucket: "photowall-d1f7a.appspot.com",
  messagingSenderId: "381235288407",
  appId: "1:381235288407:web:e58a5f1ef7a5fd87520612",
  measurementId: "G-2YBBJXB398"
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
export { database };
