
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBRoDHCqn2g9CcxEB4C9V2rpp-jDRRxmVc",
  authDomain: "react-netflix-clone-5b0d1.firebaseapp.com",
  projectId: "react-netflix-clone-5b0d1",
  storageBucket: "react-netflix-clone-5b0d1.appspot.com",
  messagingSenderId: "909832222417",
  appId: "1:909832222417:web:275948930620ee5cdeb7f0"
};

const app = initializeApp(firebaseConfig);

let auth=getAuth(app)
let db=getFirestore(app)

export {db,auth}
