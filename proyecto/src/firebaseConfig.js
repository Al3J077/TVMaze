import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDERK6wMa-rgrxQ2PA5CPPWujTKrnkNZP4",
  authDomain: "tvmaze-e618c.firebaseapp.com",
  projectId: "tvmaze-e618c",
  storageBucket: "tvmaze-e618c.firebasestorage.app",
  messagingSenderId: "925933122660",
  appId: "1:925933122660:web:c458b59885cf8960f41b71"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };