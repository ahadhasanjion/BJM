import React, { createContext, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const signIn = (email, password) => {
        signInWithEmailAndPassword (auth, email, password);
    }

    const createUser = (email, password) => {
        createUserWithEmailAndPassword (auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider)
    }
    const authInfo = {user, createUser,signInWithGoogle, signIn};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;