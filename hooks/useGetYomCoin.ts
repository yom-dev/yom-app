import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";

// Define the type for the data coming from Supabase
interface YomCoin {
  coin: number;
}

// Custom hook to fetch YomCoin from Supabase
const useGetYomCoin = () => {
  const [data, setData] = useState(0); // Initialize with 0
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchYomCoin = async () => {
      try {
        const { data: yomCoinData, error } = await supabase
          .from("yomCoin")
          .select("coin");

        if (error) {
          throw new Error(error.message);
        }

        if (yomCoinData) {
          setData(yomCoinData[0].coin); // Assign the fetched value
          console.log(data);
        }
      } catch (err: any) {
        setError(err.message);
        console.log("error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchYomCoin();
  }, []);

  return { data, loading, error };
};

export default useGetYomCoin;
