import create from "zustand";

// YomCoin 상태의 타입 정의
interface YomCoinStore {
  yomCoin: number | undefined; // yomCoin은 숫자 타입
  setYomCoin: (coin: number) => void; // yomCoin을 설정하는 함수
}

// zustand store 생성
const useYomCoinStore = create<YomCoinStore>((set) => ({
  yomCoin: undefined, // 초기 값
  setYomCoin: (coin: number) => set({ yomCoin: coin }), // 상태 설정 함수
}));

export default useYomCoinStore;
