import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBkCmged6iKTqwG4nrDgQCgnVsgOtHS2RE",
    authDomain: "crwn-db-76492.firebaseapp.com",
    databaseURL: "https://crwn-db-76492.firebaseio.com",
    projectId: "crwn-db-76492",
    storageBucket: "crwn-db-76492.appspot.com",
    messagingSenderId: "752872430224",
    appId: "1:752872430224:web:2a42347eed09c025729615"
};

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// #### JUST CHECK AND SAVE USER DATA
// #### THSI FUNCTION PROVIDE THE SNAPSHOT AFTER COME TO FIRESTORE SERVER
export const createUserProfileDocument = async (userAuth, additionalData) => {

    // #### USER DATA IS NULL
    if( !userAuth ) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get() // PROVIDE THE ACTUAL DATA - MEANS SNAPSHOT IF SOMEONE IS ASKING ABOUT IT.    
    
    if( !snapShot.exists ) {

        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                name: displayName,
                email: email,
                createdAt,
                ...additionalData
            })

        } catch(error) {
            console.log(error.message)
        }
    }

    return userRef;
}

// #### IT WILL GIVE ACCESS OF GOOGLE AUTH PROVIDER CLASS FROM AUTH LIB.
const provider = new firebase.auth.GoogleAuthProvider();

// #### ALWAYS TRIGGER THE GOOGLE POPUP WHEN IT INVOKES
provider.setCustomParameters({ prompt: 'select_account' })

// #### INVOKE TO OPEN GOOGLE SININ POPUP OR OTHERS LIKE TWITTER | FACEBOOK - MULTIPLE POPUPS
export const signInWithGoogle = () => auth.signInWithPopup(provider)

// #### EXPORTED THE WHOLE LIBRARY
export default firebase;




