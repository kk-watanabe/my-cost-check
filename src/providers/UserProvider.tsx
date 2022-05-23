import React, { useState, useCallback } from "react";

import { signInWithEmailAndPassword } from "firebase/auth";

import { useFirebaseContext } from "@/providers/FirebaseProvider";

type UserContextState = {
  login: (email: string, password: string) => Promise<void>;
  uid: string;
  errorMessage: string;
};

const UserContext = React.createContext({} as UserContextState);

const createErrorMessage = (code: string): string => {
  switch (code) {
    case "auth/wrong-password":
    case "auth/user-not-found":
      return "メールアドレスまたはパスワードが違います";
    case "auth/too-many-requests":
      return "パスワードを連続で間違えたため、アカウントを一時的にロックしました。またあとでお試しください";
    default:
      return "予期せぬエラーが発生しました。しばらく時間をおいてお試しください";
  }
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useFirebaseContext();
  const [uid, setUid] = useState(import.meta.env.VITE_FIREBASE_DEFAULT_UID);
  const [errorMessage, setErrorMessage] = useState("");

  const login = useCallback(
    async (email: string, password: string) => {
      setErrorMessage("");
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential.user.uid);
          setUid(userCredential.user.uid);
        })
        .catch((error) => {
          setErrorMessage(createErrorMessage(error.message));
        });
    },
    [auth]
  );

  const value = { login, uid, errorMessage };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => React.useContext(UserContext);
