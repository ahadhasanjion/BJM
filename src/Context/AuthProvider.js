import React, { createContext, useEffect, useState } from 'react';
import {getAuth, createUserWithEmailAndPassword,GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword (auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider()

    const signInWithGoogle = () => {
        setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        signOut(auth)
    }

    const UpdateUserProfile  = (profile) => {
        updateProfile(auth.currentUser, profile)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          
          setUser(currentUser);
          setLoading(false)
          
          
        });
        return () => {
          return unsubscribe();
        };
    
    }, [])
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