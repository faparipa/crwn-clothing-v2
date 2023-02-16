import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
//https://console.firebase.google.com/project/crwn-clothing-db-658cb/overview

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCtoia5CTIhWIvVbsy1csNINGoIOaMdTFY',
  authDomain: 'crwn-clothing-db-658cb.firebaseapp.com',
  projectId: 'crwn-clothing-db-658cb',
  storageBucket: 'crwn-clothing-db-658cb.appspot.com',
  messagingSenderId: '664616444108',
  appId: '1:664616444108:web:0e6510557ae859ec79e269',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const singInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  // console.log(userDocRef);
  //const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  //if user data not exist
  //create / set the document with the data from userAuth in my collection in Firebase
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating thev user', error.massage);
    }
  }

  //if user data exist
  return userDocRef;
};
