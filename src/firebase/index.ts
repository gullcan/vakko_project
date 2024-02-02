import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC_CWGZg145NUK90PR81l8hWEsIh-Qai08",
    authDomain: "vakko-project.firebaseapp.com",
    projectId: "vakko-project",
    storageBucket: "vakko-project.appspot.com",
    messagingSenderId: "248906243727",
    appId: "1:248906243727:web:2085a9c12c40c571db1afa"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}