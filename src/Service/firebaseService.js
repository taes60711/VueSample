import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAcV_uQSFmZSRabSXUppAK4qHhZJ1v_vVg",
  authDomain: "vuesample-d1c56.firebaseapp.com",
  projectId: "vuesample-d1c56",
  storageBucket: "vuesample-d1c56.appspot.com",
  messagingSenderId: "44844191019",
  appId: "1:44844191019:web:825bf9d428f5d90613c96e",
  measurementId: "G-XVNJ9B517B",
};

firebase.initializeApp(firebaseConfig);
export const firesotre = firebase.firestore();
