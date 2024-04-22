
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOlxWYbmLkEJHXch-qOXrJmgN_Sf_e4V0",
  authDomain: "admin-92ec1.firebaseapp.com",
  projectId: "admin-92ec1",
  storageBucket: "admin-92ec1.appspot.com",
  messagingSenderId: "911797704485",
  appId: "1:911797704485:web:ae142945fd2667ed7f2ccc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


// import { initializeApp as initializeRealtimeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDIqdCeUCmUNBo-gYMXmRbXAPaYUWnCQPo",
//   authDomain: "data-4ddeb.firebaseapp.com",
//   databaseURL: "https://data-4ddeb-default-rtdb.firebaseio.com",
//   projectId: "data-4ddeb",
//   storageBucket: "data-4ddeb.appspot.com",
//   messagingSenderId: "299053305651",
//   appId: "1:299053305651:web:e197b8ad0349b0cd36f846",
// };


// export const realtimeapp =  initializeRealtimeApp(firebaseConfig);