import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UseStoredPlanNameResult = {
  planName: string;
  loading: boolean;
  error: Error | null;
};

const useStoredPlanName = (): UseStoredPlanNameResult => {
  const [planName, setPlanName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPlanName = async () => {
      setLoading(true);
      setError(null);
      try {
        const value = await AsyncStorage.getItem("biblePlanName");
        if (value !== null) {
          setPlanName(value);
        }
      } catch (err) {
        console.error("Error reading data:", err);
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    };

    fetchPlanName();
  }, []);

  return { planName, loading, error };
};

export default useStoredPlanName;
