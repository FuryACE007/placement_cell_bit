import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA6ZEQi1n2g7T9HwXUKbFubEImgcUAcPiw",
  authDomain: "placementcellbit-c16e6.firebaseapp.com",
  databaseURL: "https://placementcellbit-c16e6-default-rtdb.firebaseio.com",
  projectId: "placementcellbit-c16e6",
  storageBucket: "placementcellbit-c16e6.appspot.com",
  messagingSenderId: "916607454254",
  appId: "1:916607454254:web:eae0fe818ea625ff07e3bf"
};

 export const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);


  