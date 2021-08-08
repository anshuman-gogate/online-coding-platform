import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../firebase';

const AuthContext = createContext();
const { Provider } = AuthContext;

function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(name, email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function logout() {
        return auth.signOut();
    }

    useEffect( () => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user); // We are setting user here because this is how its done in firebase with help of this method
            setLoading(false);
        })

        return unsubscribe; // unsubscribes when this component unmounts
    }, [] )

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword
    }

    return(
        <Provider value={ value }>
            { !loading && children }
        </Provider>
    )
}

export { AuthProvider, AuthContext }