import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";

// Define the type for the Supabase data
interface PlanStore {
  id: number;
  isActive: boolean;
  planName: string;
  subTitle: string;
  title: string;
  description: string;
}

const useGetPlanInfo = (infoPlanName: string | undefined) => {
  const [infoData, setInfoData] = useState<PlanStore | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlanStore = async () => {
      if (infoPlanName) {
        let { data, error } = await supabase
          .from("planStore")
          .select("*")
          .eq("planName", infoPlanName); // Filter the data by planName

        if (error) {
          setError("Error fetching plan store data");
        } else {
          if (data && data.length > 0) {
            setInfoData(data[0]); // Set the first item of the result to state
          } else {
            setInfoData(null); // No data found
          }
        }
        setLoading(false); // Set loading to false once data is fetched
      }
    };

    fetchPlanStore();
  }, [infoPlanName]);

  return { infoData, loading, error };
};

export default useGetPlanInfo;
