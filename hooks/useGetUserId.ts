import { useEffect, useState } from "react";
import { supabase } from "@/utils/Supabase/supabase";

export function useGetUserId() {
  const [data, setData] = useState<string | null>(null); // 유저 ID를 상태로 저장
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리
  const [error, setError] = useState<string | null>(null); // 에러 상태 관리

  useEffect(() => {
    const useGetUserId = async () => {
      try {
        // Supabase에서 세션 정보를 가져옴
        const { data, error } = await supabase.auth.getSession();

        if (error) {
          setError("Error fetching session");
          console.error("Error fetching session:", error);
          return;
        }

        if (data?.session?.user) {
          setData(data.session.user.id); // 유저 ID 저장
        } else {
          setError("No active session or user found");
        }
      } catch (err) {
        console.error("Unexpected error occurred", err);
        setError("Unexpected error occurred");
      } finally {
        setLoading(false); // 로딩 완료
      }
    };

    useGetUserId(); // 유저 ID 가져오기 함수 호출
  }, []); // 컴포넌트가 마운트될 때만 실행

  return { data }; // 유저 ID, 로딩 상태, 에러 상태 반환
}
