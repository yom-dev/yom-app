import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase";

type Profile = {
  username: string;
  avatarUrl: string;
  website: string;
  lastName: string;
  firstName: string;
  updatedAt: Date;
  birthday: Date;
  // Add other fields as per your profiles table structure
};

const useGetProfile = () => {
  const [profiles, setProfiles] = useState<Profile[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        let { data, error } = await supabase.from("profiles").select("*");

        if (error) throw error;
        setProfiles(data || []); // Ensure data is either an array or empty array
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  return { profiles, error, loading };
};

export default useGetProfile;
