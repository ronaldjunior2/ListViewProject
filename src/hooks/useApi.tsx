import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export function useApi<T>(endPoint: string): HookResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  function fetchData() {
    setLoading(true);
    axios
      .get(endPoint)
      .then((res: AxiosResponse<T>) => onSuccess(res.data))
      .catch(onError);
  }

  function onSuccess(res: T) {
    setData(res);
    setLoading(false);
  }

  function onError() {
    setError(true);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, fetchData };
}

type HookResponse<T> = {
  data: T | null;
  loading: boolean;
  error: boolean;
  fetchData: () => void;
};
