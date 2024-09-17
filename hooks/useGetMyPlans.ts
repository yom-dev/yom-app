import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import { MyPlans } from "@/shared/types/MyPlans";

// 모든 컬럼에 대해 문자열 또는 Boolean 값을 가질 수 있도록 타입 정의
const useGetMyPlans = () => {
  const [data, setData] = useState<MyPlans | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [trueKeys, setTrueKeys] = useState<{ key: string; planName: string }[]>(
    []
  );

  // boolean 값이 true인 key들의 이름을 key와 planName 형태로 변환
  const getTrueKeys = (plans: MyPlans) => {
    return Object.keys(plans)
      .filter((key) => plans[key as keyof MyPlans] === true)
      .map((key, index) => ({
        key: (index + 1).toString(), // 인덱스를 사용하여 key 생성
        planName: key, // planName은 key 값과 동일
      }));
  };

  const fetchMyPlans = async () => {
    try {
      const { data, error } = await supabase.from("myPlans").select("*");

      if (error) {
        throw new Error(error.message); // 에러 발생 시 처리
      }

      if (data && data.length > 0) {
        const rawData = data[0];

        // user_id를 제외한 나머지 값들 중 boolean인 값만 추출
        const filteredData = Object.keys(rawData).reduce((acc, key) => {
          if (key !== "id" && typeof rawData[key] === "boolean") {
            acc[key] = rawData[key]; // boolean 값만 저장
          }
          return acc;
        }, {} as MyPlans);

        setData(filteredData); // 필터링된 데이터 상태 업데이트

        // trueKeys 배열 생성
        const keys = getTrueKeys(filteredData);
        setTrueKeys(keys); // trueKeys 상태 업데이트
      } else {
        setData(null); // 데이터가 없는 경우
      }
    } catch (error: any) {
      setError(error.message || "An unknown error occurred");
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  useEffect(() => {
    fetchMyPlans();
  }, []); // 컴포넌트 마운트 시 한번 실행

  return { trueKeys, loading, error };
};

export default useGetMyPlans;

// MyPlans 타입 정의
export type MyPlans = {
  id: string;
  reading: boolean;
  gratitude: boolean;
  meditation: boolean;
  running: boolean;
};
