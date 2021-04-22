import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCIcgekDFf-XW1oCC41v14OPf1Znst_hqQ",
    authDomain: "crwn-ba8f7.firebaseapp.com",
    projectId: "crwn-ba8f7",
    storageBucket: "crwn-ba8f7.appspot.com",
    messagingSenderId: "192988363759",
    appId: "1:192988363759:web:2e760a2252bf738334141a",
    measurementId: "G-3Y27LH0X8D"
  };
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider)
  export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log(error);
      }
    }
    return userRef;
  }
  export default firebase;
