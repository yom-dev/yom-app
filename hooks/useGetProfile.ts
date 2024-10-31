import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/utils/Supabase/supabase";

type Profile = {
  userName: string;
  avatarUrl: string;
  website: string;
  lastName: string;
  firstName: string;
  updatedAt: Date;
  birthDate: Date;
  // Add other fields as per your profiles table structure
};

const useGetProfile = () => {
  const [data, setData] = useState<Profile[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // 프로필 데이터를 다시 가져오는 refetch 함수
  const fetchProfiles = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.from("profiles").select("*");

      if (error) throw error;
      setData(data || []); // Ensure data is either an array or empty array
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // 초기 로드 시 fetch 호출
  useEffect(() => {
    fetchProfiles();
  }, [fetchProfiles]);

  return { data, error, loading, refetch: fetchProfiles }; // refetch 추가
};

export default useGetProfile;
