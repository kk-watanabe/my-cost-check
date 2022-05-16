import { VFC } from "react";
import { useFirebaseContext } from "@/providers/FirebaseProvider";
import { useUserContext } from "@/providers/UserProvider";

const Home: VFC = () => {
  const { auth } = useFirebaseContext();
  const { user } = useUserContext();

  console.log(auth, user);

  return <div>Home</div>;
};

export default Home;
