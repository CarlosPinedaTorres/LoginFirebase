// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB39-QsZTGuShfWMRznX9m3A_fmX-9izSs",
  authDomain: "login-firebase-28ada.firebaseapp.com",
  projectId: "login-firebase-28ada",
  storageBucket: "login-firebase-28ada.firebasestorage.app",
  messagingSenderId: "334469022974",
  appId: "1:334469022974:web:9b9031101589cabbec51af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


export const db = getFirestore(app);