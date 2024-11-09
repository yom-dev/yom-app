import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/utils/supabase";
import Gratitude from "@/components/Plan/Gratitude/Gratitude";

import { GratitudeContentType } from "@/shared/types/GratitudeContentType";

const getGratitudeItems = () => {
  const [data, setData] = useState<GratitudeContentType[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // 프로필 데이터를 다시 가져오는 refetch 함수
  const fetchGratitudeItems = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("gratitudeContent")
        .select("*");

      if (error) throw error;
      setData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // 초기 로드 시 fetch 호출
  useEffect(() => {
    fetchGratitudeItems();
  }, []);

  return { data, loading, error, refetch: fetchGratitudeItems }; // refetch 추가
};

export default getGratitudeItems;
