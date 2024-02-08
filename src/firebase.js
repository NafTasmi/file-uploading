import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDl7N27Wfj283rEQw24CBPYUb1hrIaZcxo",
  authDomain: "uploadingfile-ce49f.firebaseapp.com",
  projectId: "uploadingfile-ce49f",
  storageBucket: "uploadingfile-ce49f.appspot.com",
  messagingSenderId: "349063171480",
  appId: "1:349063171480:web:2f7b7e0962d992a29cafed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)