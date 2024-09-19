import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import { MyPlans } from "@/shared/types/MyPlans";

const useGetMyPlans = () => {
  const [data, setData] = useState<MyPlans | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [trueKeys, setTrueKeys] = useState<{ key: string; planName: string }[]>(
    []
  );

  // Function to filter and get keys with boolean true values
  const getTrueKeys = (plans: MyPlans) => {
    return Object.keys(plans)
      .filter((key) => plans[key as keyof MyPlans] === true)
      .map((key, index) => ({
        key: (index + 1).toString(), // Create keys based on index
        planName: key, // Use the original key as the planName
      }));
  };

  // Fetch data from the "myPlans" table
  const fetchMyPlans = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("myPlans").select("*");

      if (error) {
        throw new Error(error.message);
      }

      if (data && data.length > 0) {
        const rawData = data[0];

        // Filter data to include only boolean fields excluding 'id'
        const filteredData = Object.keys(rawData).reduce((acc, key) => {
          if (key !== "id" && typeof rawData[key] === "boolean") {
            acc[key] = rawData[key];
          }
          return acc;
        }, {} as MyPlans);

        setData(filteredData);

        // Create trueKeys from filteredData
        const keys = getTrueKeys(filteredData);
        setTrueKeys(keys);
      } else {
        setData(null);
      }
    } catch (error: any) {
      console.error("Error fetching plans:", error);
      setError(error.message || "An unknown error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyPlans();
  }, []); // Run once when the component mounts

  return { trueKeys, loading, error };
};

export default useGetMyPlans;
