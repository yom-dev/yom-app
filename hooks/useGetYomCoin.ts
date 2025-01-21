import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/utils/supabase";

// Define the type for the data coming from Supabase
interface YomCoin {
  coin: number;
}

// Custom hook to fetch YomCoin from Supabase with refetch functionality
const useGetYomCoin = () => {
  const [data, setData] = useState(0); // Initialize with 0
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch the YomCoin data
  const fetchYomCoin = useCallback(async () => {
    setLoading(true);
    try {
      const { data: yomCoinData, error } = await supabase
        .from("yom_coin")
        .select("coin");

      if (error) {
        throw new Error(error.message);
      }

      if (yomCoinData) {
        setData(yomCoinData[0].coin); // Assign the fetched value
        console.log("Fetched data:", yomCoinData[0].coin);
      }
    } catch (err: any) {
      setError(err.message);
      console.log("Error:", err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch on mount
  useEffect(() => {
    fetchYomCoin();
  }, [fetchYomCoin]);

  return { data, loading, error, refetch: fetchYomCoin };
};

export default useGetYomCoin;
