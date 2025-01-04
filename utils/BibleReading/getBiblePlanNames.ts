import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/utils/supabase";

import { BibleReadingContentType } from "@/shared/types/BibleReadingContentType";

const getBiblePlanNames = () => {
  const [initialData, setInitialData] = useState<
    Pick<BibleReadingContentType, "planName" | "created_at" | "id">[] | null
  >(null);
  const [data, setData] = useState<Pick<
    BibleReadingContentType,
    "planName" | "created_at" | "id"
  > | null>(null);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // 데이터 가져오는 함수
  const fetchBiblePlan = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("bibleReadingContent")
        .select("id, planName, created_at"); // 필요한 열만 선택

      if (error) throw error;

      setInitialData(data); // 가져온 데이터를 상태에 저장
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // 초기 로드 시 fetch 호출
  useEffect(() => {
    fetchBiblePlan();
  }, [fetchBiblePlan]);

  return { data: initialData, loading, error, refetch: fetchBiblePlan };
};

export default getBiblePlanNames;
