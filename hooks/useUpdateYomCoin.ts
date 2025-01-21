import { useState } from "react";
import { supabase } from "@/utils/supabase";
import useGetYomCoin from "./useGetYomCoin";
import { useGetUser } from "./useGetUser";
import useYomCoinStore from "@/shared/store/yomCoinStore"; // zustand store 임포트

// Custom hook to update YomCoin in Supabase using RPC
const useUpdateYomCoin = () => {
  const {
    data: currentCoin,
    loading: loadingCoin,
    error: errorCoin,
    refetch,
  } = useGetYomCoin();
  const { user } = useGetUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { setYomCoin } = useYomCoinStore(); // zustand store에서 setYomCoin 가져오기

  const updateYomCoin = async (incrementValue: number) => {
    if (loadingCoin) {
      console.log("Loading coin data...");
      return;
    }

    setLoading(true);
    try {
      // 새로운 코인 값 계산
      const newCoinValue = currentCoin + incrementValue;

      // Supabase에 업데이트 요청
      const { error } = await supabase
        .from("yom_coin")
        .update({ coin: newCoinValue })
        .eq("user_id", user.id); // 예시로 user.id를 사용하여 레코드를 업데이트

      if (error) {
        throw new Error(error.message);
      }

      console.log("Update successful:", newCoinValue);

      // 상태를 업데이트하여 zustand store에서 coin 값을 최신으로 유지
      setYomCoin(newCoinValue);
    } catch (err: any) {
      setError(err.message);
      console.error("Update failed:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return { updateYomCoin, loading, error };
};

export default useUpdateYomCoin;
