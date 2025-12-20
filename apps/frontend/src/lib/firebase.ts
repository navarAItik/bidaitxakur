import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import {
  getAuth,
  type Auth,
  connectAuthEmulator,
} from 'firebase/auth';
import {
  getFirestore,
  type Firestore,
  connectFirestoreEmulator,
} from 'firebase/firestore';
import {
  getStorage,
  type FirebaseStorage,
  connectStorageEmulator,
} from 'firebase/storage';

let app: FirebaseApp | undefined;
let auth: Auth | undefined;
let db: Firestore | undefined;
let storage: FirebaseStorage | undefined;

export const initFirebase = () => {
  if (app) return { app, auth: auth!, db: db!, storage: storage! };

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  if (!firebaseConfig.apiKey) {
    throw new Error('Faltan variables de entorno de Firebase');
  }

  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);

  if (process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_USE_EMULATORS === 'true') {
    connectAuthEmulator(auth, 'http://127.0.0.1:9099');
    connectFirestoreEmulator(db, '127.0.0.1', 8080);
    connectStorageEmulator(storage, '127.0.0.1', 9199);
  }

  return { app, auth, db, storage };
};
