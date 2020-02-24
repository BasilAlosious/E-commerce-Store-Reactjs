import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyC9d5867Zi-yhfMuuBvV43T0yhgvl4bgtQ",
    authDomain: "amsi-furn.firebaseapp.com",
    databaseURL: "https://amsi-furn.firebaseio.com",
    projectId: "amsi-furn",
    storageBucket: "amsi-furn.appspot.com",
    messagingSenderId: "472240830956",
    appId: "1:472240830956:web:9c28572c82ae1811e768c9",
    measurementId: "G-DKH6HDPFJT"
}

firebase.initializeApp(config);

export const auth= firebase.auth();
export const firestore= firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle =()=>auth.signInWithPopup(provider);
