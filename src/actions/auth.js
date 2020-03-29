import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider); //  this function will trigger the popup of for authentication. In this case, I passed google provider object, so it will pop up google authentication
    }
}

export const logout = (uid) => ({
    type: 'LOGOUT',
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut(); //  this function will trigger the popup of for authentication. In this case, I passed google provider object, so it will pop up google authentication
    }
}