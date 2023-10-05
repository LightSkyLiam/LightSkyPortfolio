import { useState, useEffect, useCallback } from "react";

export function usePOST(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendData = useCallback(
    async (data) => {
      setSuccess(null);
      setError(null);
      try {
        setIsLoading(true);
        console.log(`sending`);
        console.log(data);
        console.log(JSON.stringify(data));
        const res = await fetch(url, {
          method: `POST`,
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        console.log(res);
        if (!res.ok)
          throw new Error("There was and error getting data from API");
        setSuccess(true);
      } catch (error) {
        setError(error.message);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    sendData;
  }, [sendData]);

  return [error, isLoading, sendData, success];
}
