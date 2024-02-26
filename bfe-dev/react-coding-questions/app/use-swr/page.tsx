/**
 * when promise resolves  

when promise rejects  

when promise is still pending  

fetcher could be a non-Promise
 */
import { useEffect, useMemo, useState } from "react";

// useSWR Custom Hook
function useSWR<T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>,
): { data?: T; error?: E } {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<E>();

  const result = useMemo(fetcher, [_key]);

  useEffect(() => {
    if (result instanceof Promise) {
      result.then(setData, setError);
    }
  }, []);

  return { data, error };
}

export default function Home() {
  return <>Using SWR</>;
}
