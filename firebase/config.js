import * as firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxVUNQSbGMW-l0JjK6suI1wKAzJSgqoKg",
  authDomain: "react-native-social-2cec7.firebaseapp.com",
  projectId: "react-native-social-2cec7",
  storageBucket: "react-native-social-2cec7.appspot.com",
  messagingSenderId: "350208950785",
  appId: "1:350208950785:web:0a58a7795973a370f7b600",
  measurementId: "G-C8V43H37KP",
};

export default firebase.initializeApp(firebaseConfig);

// ======================================

// let app;
// if (firebase.app.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app();
// }

// const auth = firebase.auth();
// export { auth };

// ==========================================
