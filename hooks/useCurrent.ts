import { error } from "console";
import useSWR from "swr";

import fetcher from "../lib/fetcher";
import exp from "constants";

const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
