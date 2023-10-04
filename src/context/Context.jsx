import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase/firebase.confiq";

export const authContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loder, setLoder] = useState(true);

    // create users
    const createUser = (email, password) => {
        setLoder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signIn users
    const signInUser = (email, password) => {
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut
    const logOut = () => {
        setLoder(true)
        return signOut(auth);
    }

    const googleSignIn = () => {
        setLoder(true)
        return signInWithPopup(auth, googleProvider);
    }

    // observe auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoder(false)
        });

        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { user, createUser, signInUser, logOut, loder, googleSignIn }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

Context.propTypes = {
    children: PropTypes.node
}

export default Context;