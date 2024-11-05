import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBT_jvWA_WWF1bX-mIy77kahK0vzGsNtTY",
    authDomain: "pruebafirebasecris-62c5a.firebaseapp.com",
    projectId: "pruebafirebasecris-62c5a",
    storageBucket: "pruebafirebasecris-62c5a.appspot.com",
    messagingSenderId: "654989355553",
    appId: "1:654989355553:web:79f7fcbf46a47593be1160"
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore };