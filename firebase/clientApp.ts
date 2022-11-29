import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjvR0hvPIlHNjvIwtbDMqjjaIW1bnslYM",
  authDomain: "test-spreadsheet-350514.firebaseapp.com",
  projectId: "test-spreadsheet-350514",
  storageBucket: "test-spreadsheet-350514.appspot.com",
  messagingSenderId: "376517709758",
  appId: "1:376517709758:web:b56fe92a53c8497674b3ef",
  measurementId: "G-BPDGFTDP7P",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
