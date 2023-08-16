import { error } from "console";
import useSWR from "swr";

import fetcher from "../lib/fetcher";
import exp from "constants";

const useUsers = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/users", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useUsers;
