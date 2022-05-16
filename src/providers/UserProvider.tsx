import React, { useEffect, useState, useCallback } from "react";

import { signInWithEmailAndPassword, User } from "firebase/auth";

import { useFirebaseContext } from "@/providers/FirebaseProvider";

type UserContextState = {
  login: (email: string, password: string) => Promise<void>;
  user: User | null;
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

const defaultEmail = import.meta.env.VITE_APP_DEFAULT_ID as string;
const defaultPassword = import.meta.env.VITE_APP_DEFAULT_PASSWORD as string;

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { auth } = useFirebaseContext();
  const [user, setUser] = useState<User | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const login = useCallback(
    async (email: string, password: string) => {
      setErrorMessage("");
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser(userCredential.user);
        })
        .catch((error) => {
          setErrorMessage(createErrorMessage(error.message));
        });
    },
    [auth]
  );

  useEffect(() => {
    (async () => {
      if (user === null) {
        console.log(1234);
        await login(defaultEmail, defaultPassword);
      }
    })();
  }, [login, user]);

  const value = { login, user, errorMessage };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => React.useContext(UserContext);
