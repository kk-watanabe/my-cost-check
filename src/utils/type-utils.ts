import { DocumentData } from "firebase/firestore";

/**
 * UserInfo type を作成する
 * @param value UserDocuments
 * @returns UserInfo
 */
export const buildUserInfo = (value: UserDocuments) => {
  return {
    email: value.email,
    isAdmin: value.is_admin,
    name: value.name,
  } as UserInfo;
};

export const buildCosts = (doc: DocumentData) => {
  const data = doc.data();
  console.log(doc, data);

  return {
    id: doc.id,
    name: data.name,
    dates: data.dates,
  } as Cost;
};
