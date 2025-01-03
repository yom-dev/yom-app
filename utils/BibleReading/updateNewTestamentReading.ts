import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/utils/supabase";
import { useNewTestamentStore } from "@/shared/store/BibleReading/useNewTestamentStore";
import { Section } from "@/shared/types/BibleReadingContentType";

interface UpdateNewTestamentReadingReturn {
  newData: Section | null;
  newLoading: boolean;
  newError: string | null;
  newRefetch: () => void;
  setPlanName: (planName: string) => void;
}
const updateNewTestamentReading = (initialPlanName: string) => {
  const [planName, setPlanName] = useState(initialPlanName);
  const [data, setData] = useState<Section | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sectionData = useNewTestamentStore((state) => state.NewTestamentBooks);

  const updateBibleReading = useCallback(async () => {
    setLoading(true);
    setError(null); // 이전 에러 초기화
    try {
      const { data, error } = await supabase
        .from("bibleReadingContent")
        .update({ newTestament: sectionData })
        .eq("planName", planName);

      if (error) throw error;
      setData(data);
      return true; // 성공 반환
    } catch (err: any) {
      setError(err.message);
      console.error("Update Error:", err.message);
      return false; // 실패 반환
    } finally {
      setLoading(false);
    }
  }, [planName, sectionData]);

  return {
    newData: data,
    newLoading: loading,
    newError: error,
    newRefetch: updateBibleReading,
    setPlanName,
  };
};
export default updateNewTestamentReading;
