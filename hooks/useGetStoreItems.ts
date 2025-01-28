import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";

// Define the type for the data coming from Supabase
interface PlanStore {
  id: number;
  isActive: boolean;
  planName: string;
  subTitle: string;
  title: string;
  description: string;
  price: number;
}

// Custom hook to fetch store items from Supabase
const useGetStoreItems = () => {
  const [data, setData] = useState<PlanStore[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStoreItems = async () => {
      try {
        let { data, error } = await supabase.from("plan_store").select("*");
        if (error) {
          throw new Error(error.message);
        }
        setData(data ?? []); // Set to empty array if data is null
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStoreItems();
  }, []);

  return { data, loading, error };
};

export default useGetStoreItems;
