import { error } from "console";
import useSWR from "swr";

import fetcher from "../lib/fetcher";
import exp from "constants";

const useUser = (userId:string) => {
  const { data, error, isLoading, mutate } = useSWR( userId? `/api/users/${userId}`:null, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUser;
