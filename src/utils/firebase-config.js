// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBZ5Ug9p3pOz3DgkH47ptcVAziFKcyLoMs",
  authDomain: "react-netflix-clone-c6fa8.firebaseapp.com",
  projectId: "react-netflix-clone-c6fa8",
  storageBucket: "react-netflix-clone-c6fa8.appspot.com",
  messagingSenderId: "632848344959",
  appId: "1:632848344959:web:1a62817302deecee371c4a",
  measurementId: "G-CSLWDMKZGT"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);