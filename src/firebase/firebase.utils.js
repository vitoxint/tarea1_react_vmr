import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


//config firebase

const firebaseConfig = {
    apiKey: "AIzaSyB_LkStJl8DLPBq4_61VD3OJ6BWliiHgKk",
    authDomain: "proyecto-1-reactjs-4ee89.firebaseapp.com",
    projectId: "proyecto-1-reactjs-4ee89",
    storageBucket: "proyecto-1-reactjs-4ee89.appspot.com",
    messagingSenderId: "468679652505",
    appId: "1:468679652505:web:9339a04c6ce4861341f408"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`); // define el path de la collecion con el identificador de usuarios con su uuid

    const snapshot = await userRef.get(); // .get() obtiene esa referencia de los documentos asociados a esa collection

    if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData,
        });
      } catch (error) {
        console.log("error creating user", error.message);
      }
    }

    return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore(); // firestore: todo lo que es apuntar a collections y documentos

  //config providers
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
