import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/utils/supabase";

import { BibleReadingContentType } from "@/shared/types/BibleReadingContentType";

const getBibleReadingContent = (planName: string | null | undefined) => {
  const [intialData, setInitialData] = useState<
    BibleReadingContentType[] | null
  >(null);
  const [data, setData] = useState<BibleReadingContentType | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // 프로필 데이터를 다시 가져오는 refetch 함수
  const fetchBibleReadingContent = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("bible_reading_content")
        .select("*")
        .eq("planName", `${planName}`);

      if (error) throw error;
      setData(data[0]);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // 초기 로드 시 fetch 호출
  useEffect(() => {
    fetchBibleReadingContent();
  }, []);

  return { data, loading, error, refetch: fetchBibleReadingContent }; // refetch 추가
};

export default getBibleReadingContent;
