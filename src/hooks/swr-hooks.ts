import useSWR from "swr";
import { collection, getDocs, query } from "firebase/firestore";
import { firestore } from "@/providers/FirebaseProvider";
import { buildCosts } from "@/utils/type-utils";

const useFetcher = async (url: string) => {
  console.log(firestore, url);
  const costsResult = await getDocs(query(collection(firestore, "users")));

  return costsResult.docs.map(buildCosts);
};

/**
 * useSWR を使用する
 * @returns
 */
export const useFetchCostsWithSWR = (url: string) => {
  console.log(url);
  const {
    data,
    error,
    mutate: setCosts,
  } = useSWR(url, useFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  console.log(data);
  const costs = data === undefined ? [] : data;
  const isLoading = !error && !data;
  const isError = error;

  return { costs, isLoading, isError, setCosts };
};
