import React from "react";

import { initializeApp } from "firebase/app";
import { getAnalytics, Analytics } from "firebase/analytics";
import { getAuth, browserLocalPersistence, Auth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

type FirebaseContextState = {
  analytics: Analytics;
  auth: Auth;
};

const FirebaseContext = React.createContext({} as FirebaseContextState);

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_CONFIG_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_CONFIG_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
  projectId: import.meta.env.VITE_FIREBASE_SECRET_KEY_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_CONFIG_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_CONFIG_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.setPersistence(browserLocalPersistence);

export const firestore = getFirestore(app);

export const FirebaseProvider = ({ children }: { children: React.ReactNode }) => {
  const value = { analytics, auth };

  return <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>;
};

export const useFirebaseContext = () => React.useContext(FirebaseContext);
