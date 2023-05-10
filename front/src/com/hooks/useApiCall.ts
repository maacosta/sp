import { useEffect, useState } from "react";
import { ApiResponse } from "../../types/apiData";

export function useApiCall<T>(service: () => Promise<T>, conditions: boolean, dependencies: React.DependencyList): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
      if (conditions) {
          setIsLoading(true);
          setError(null);
          service()
              .then(d => {
                  setData(d);
              })
              .catch(e => {
                  setError(e);
              })
              .finally(() => {
                  setIsLoading(false);
              });
      }
  }, dependencies);

  return { data, isLoading, error };
}
