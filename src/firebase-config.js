import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAFxSU6XfwwogwXpXoSWkfb2xlSO8XcomY",
  authDomain: "fir-testing-940dd.firebaseapp.com",
  projectId: "fir-testing-940dd",
  storageBucket: "fir-testing-940dd.appspot.com",
  messagingSenderId: "422643193689",
  appId: "1:422643193689:web:fa1e363e48b5a626089e48",
  measurementId: "G-0W9M8BKMNJ"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)