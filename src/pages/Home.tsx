import { FC, useCallback, useEffect } from "react";
import { useFirebaseContext } from "@/providers/FirebaseProvider";
import { useUserContext } from "@/providers/UserProvider";
import { buildUserInfo, buildCosts } from "@/utils/type-utils";

import Button from "@/components/elements/Button";

const Home: FC = () => {
  const { getQuerySnapshot, getDocumentSnapshot } = useFirebaseContext();
  const { uid } = useUserContext();
  const usersCollectionName = "users";
  const usersPath = `${usersCollectionName}/${uid}`;
  const costsCollectionName = "costs";
  const costsPath = `${usersPath}/${costsCollectionName}`;

  const fetch = useCallback(async () => {
    const userResult = getDocumentSnapshot(usersPath);

    if ((await userResult).exists()) {
      const userInfo = buildUserInfo((await userResult).data() as UserDocuments);
      console.log(userInfo);

      const costsResult = getQuerySnapshot(costsPath);
      const costs = await (await costsResult).docs.map(buildCosts);
      console.log(costs);
    }
  }, [getDocumentSnapshot, usersPath, getQuerySnapshot, costsPath]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div>
      <div>Home</div>
      <Button label="Button" />
    </div>
  );
};

export default Home;
