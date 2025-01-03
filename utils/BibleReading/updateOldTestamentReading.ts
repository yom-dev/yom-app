import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/utils/supabase";
import { useOldTestamentStore } from "@/shared/store/BibleReading/useOldTestamentStore";
import { Section } from "@/shared/types/BibleReadingContentType";

interface UpdateOldTestamentReadingReturn {
  oldData: Section | null;
  oldLoading: boolean;
  oldError: string | null;
  oldRefetch: () => Promise<boolean>;
  setPlanName: (planName: string) => void;
}

const updateOldTestamentReading = (
  initialPlanName: string
): UpdateOldTestamentReadingReturn => {
  const [planName, setPlanName] = useState(initialPlanName);
  const [data, setData] = useState<Section | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sectionData = useOldTestamentStore((state) => state.OldTestamentBooks);

  const updateBibleReading = useCallback(async () => {
    setLoading(true);
    setError(null); // 이전 에러 초기화
    try {
      const { data, error } = await supabase
        .from("bibleReadingContent")
        .update({ oldTestament: sectionData })
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
    oldData: data,
    oldLoading: loading,
    oldError: error,
    oldRefetch: updateBibleReading,
    setPlanName,
  };
};

export default updateOldTestamentReading;
