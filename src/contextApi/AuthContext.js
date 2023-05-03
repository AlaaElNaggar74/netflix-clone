import { createContext, useContext, useState, useEffect } from "react";

import { auth, db } from "../firebase-config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { setDoc, doc } from "firebase/firestore";

let AuthContext = createContext();

export let AuthContextProvider = ({ children }) => {
  let [user, setUser] = useState("");

  let createNewUserFun = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, "UserSingUp", email), {
      userCollectio: [],
    });
  };

  let loginFun = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  let logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser("");
      }
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ createNewUserFun, loginFun, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export let UserAuth = () => {
  return useContext(AuthContext);
};
