import React, { createContext, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
      return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth)
    }

    const UpdateUserProfile  = (profile) => {
        updateProfile(auth.currentUser, profile)
    }

    const authInfo = {user, createUser,signInWithGoogle, signIn, logOut,UpdateUserProfile};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProvider;