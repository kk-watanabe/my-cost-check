import { VFC, useCallback, useEffect } from "react";
import tw from "tailwind-styled-components";
import { useFirebaseContext } from "@/providers/FirebaseProvider";
import { useUserContext } from "@/providers/UserProvider";
import { buildUserInfo, buildCosts } from "@/utils/type-utils";

import Button from "@/components/elements/Button";

const Container = tw.div`
    flex
    items-center
    justify-center
    flex-col
    w-full
    bg-indigo-600
`;

const Home: VFC = () => {
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
    <Container>
      <div>Home</div>
      <Button label="Button" />
    </Container>
  );
};

export default Home;
