import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const Authcontext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(true);
    const [loading, setLoading] = useState(true);


    // user register by email & password
    const createdByEmailPass = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // currently signed-in user observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            // console.log('logged user', loggedUser);
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    // update profile
    const updateUserInfo = (name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const authInfo = {
        user,
        createdByEmailPass,
        updateUserInfo
    };

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;