import { initializeApp as initializeFirestoreApp  } from "firebase/app";

const firestoreConfig = {
  apiKey: "AIzaSyBOlxWYbmLkEJHXch-qOXrJmgN_Sf_e4V0",
  authDomain: "admin-92ec1.firebaseapp.com",
  projectId: "admin-92ec1",
  storageBucket: "admin-92ec1.appspot.com",
  messagingSenderId: "911797704485",
  appId: "1:911797704485:web:ae142945fd2667ed7f2ccc"
};

export const firestoreapp = initializeFirestoreApp(firestoreConfig);