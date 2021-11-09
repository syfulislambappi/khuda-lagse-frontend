import { useState } from "react";
import { 
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
 } from 'firebase/auth';
import { useEffect } from "react";
import firebaseStart from "../firebase/firebase.init";

// start firebase
firebaseStart()

// default user avatar
const defaultPhotoUri = `https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Avatar_icon_green.svg/1024px-Avatar_icon_green.svg.png`;

const useFirebase = () => {
    // hooks for user
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)
    const auth = getAuth()

    // track the user login or logout
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) setUser(user)
            setLoading(false)
        })
    }, [auth])

    // create user with email and password
    const emailSignUp = (name, email, password) => {
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then(userData => {
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: defaultPhotoUri
                })
                setUser(userData.user)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }
    
    // login user with email and password
    const emailSignIn = (email, password) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(userData => {
                setUser(userData.user)
            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => setLoading(false))
    }

    // login user with google
    const googleSignIn = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    // logout user
    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => setUser({}))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false))
    }

    return {googleSignIn, logOut, emailSignUp, emailSignIn, user, error, loading}
}

export default useFirebase;