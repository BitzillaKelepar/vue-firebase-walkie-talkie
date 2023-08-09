// import firebase SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBC48qjfMy3UD1R7wCUdil3jKFVOAMnia8",
    authDomain: "vue-firebase-walkie-talk-22b7b.firebaseapp.com",
    projectId: "vue-firebase-walkie-talk-22b7b",
    storageBucket: "vue-firebase-walkie-talk-22b7b.appspot.com",
    messagingSenderId: "456598557966",
    appId: "1:456598557966:web:5d9e6da1964659e010b35f"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore, Storage & Authentication and get a reference to the service
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const storage = getStorage(firebaseApp);

// export from firebase firestore SDK
export {db, auth, storage};
