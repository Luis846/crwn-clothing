import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCk3XyGGIHluUXDKUjp2qliugbeMwjCcCY",
    authDomain: "crwn-db-b3ed8.firebaseapp.com",
    databaseURL: "https://crwn-db-b3ed8.firebaseio.com",
    projectId: "crwn-db-b3ed8",
    storageBucket: "crwn-db-b3ed8.appspot.com",
    messagingSenderId: "448141518694",
    appId: "1:448141518694:web:bcda0f76b3a840a1c74aa7"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  console.log(snapShot);

  if(!snapShot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;

}

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;