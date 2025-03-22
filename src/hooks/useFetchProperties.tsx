import { useState, useEffect, useCallback } from "react";
import { Property } from "../types/Property";

export const useFetchProperties = (API_URL: string) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const cacheData = localStorage.getItem("properties");
      if (cacheData) {
        setProperties(JSON.parse(cacheData));
        setIsLoading(false);
        return;
      }

      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error(`Error de red: ${response.status} - ${response.statusText}`);
      }

      const data: Property[] = await response.json();
      localStorage.setItem("properties", JSON.stringify(data));
      setProperties(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknow error ocurred");
    } finally {
      setIsLoading(false);
    }
  }, [API_URL]);

  useEffect(() => {
    if (API_URL) {
      fetchData();
    }
  }, [API_URL, fetchData]);

  return { properties, isLoading, error };
};
