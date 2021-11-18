import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from '@firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB-_WHPad8FlsDcLURpGusEXVZ2F2AnkXs",
  authDomain: "pomodoro-84ef2.firebaseapp.com",
  projectId: "pomodoro-84ef2",
  storageBucket: "pomodoro-84ef2.appspot.com",
  messagingSenderId: "880371991959",
  appId: "1:880371991959:web:2ecc01a6cfc0570f10f0d2",
  measurementId: "G-P6DPFPS29B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export {
  app, analytics, auth,
};
