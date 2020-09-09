import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDLSBeEs5AIjbM4QVYe5RwCP8BloZ1eNOU",
  authDomain: "crown-dev-96deb.firebaseapp.com",
  databaseURL: "https://crown-dev-96deb.firebaseio.com",
  projectId: "crown-dev-96deb",
  storageBucket: "crown-dev-96deb.appspot.com",
  messagingSenderId: "13229950164",
  appId: "1:13229950164:web:fd16f26b5f0f9080c52741",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
