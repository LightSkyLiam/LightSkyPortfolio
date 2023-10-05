import { useState, useEffect, useCallback } from "react";

export function useFetch(initialState, getDataFunction, callback) {
  const [value, setValue] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const FetchURL = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    try {
      const data = await getDataFunction();
      setValue(data.record);
      callback();
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [callback, getDataFunction]);

  useEffect(() => {
    FetchURL();
  }, [FetchURL]);

  return [error, isLoading, value, FetchURL];
}
