import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

export const app = initializeApp({
  apiKey: "AIzaSyAxVUNQSbGMW-l0JjK6suI1wKAzJSgqoKg",
  authDomain: "react-native-social-2cec7.firebaseapp.com",
  projectId: "react-native-social-2cec7",
  storageBucket: "react-native-social-2cec7.appspot.com",
  messagingSenderId: "350208950785",
  appId: "1:350208950785:web:0a58a7795973a370f7b600",
  measurementId: "G-C8V43H37KP",
});
export const storageFirebase = getStorage();
export const db = getFirestore(app);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
