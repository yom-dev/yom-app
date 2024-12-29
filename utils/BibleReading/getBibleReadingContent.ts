import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/utils/supabase";

import { BibleReadingContentType } from "@/shared/types/BibleReadingContentType";

const getBibleReadingContent = () => {
  const [data, setData] = useState<BibleReadingContentType[] | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // 프로필 데이터를 다시 가져오는 refetch 함수
  const fetchBibleReadingContent = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("bibleReadingContent")
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
    fetchBibleReadingContent();
  }, []);

  return { data, loading, error, refetch: fetchBibleReadingContent }; // refetch 추가
};

export default getBibleReadingContent;
