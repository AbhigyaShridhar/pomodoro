import React, { createContext, useState } from 'react';
import { auth } from '../config/index';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value = {{
        user,
        setUser,
        login: (email, password) => {
          try {
            signInWithEmailAndPassword(auth, email, password);
          } catch (e){
            console.log(e);
          }
        },
        register: (email, password) => {
          try {
            createUserWithEmailAndPassword(auth, email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: () => {
          try {
            auth.signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
    { children }
  </AuthContext.Provider>
  );
}
