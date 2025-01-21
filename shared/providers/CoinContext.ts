// import React, { createContext, ReactNode, useState, useEffect } from 'react';
// import useGetYomCoin from '@/hooks/useGetYomCoin';

// // Context의 타입 정의
// interface CoinContextType {
//   data: number;
//   loading: boolean;
//   error: string | null;
// }

// // children의 타입을 ReactNode로 명시
// interface CoinProviderProps {
//   children: ReactNode;
// }

// // Context 생성
// const CoinContext = createContext<CoinContextType | undefined>(undefined);

// const CoinProvider: React.FC<CoinProviderProps> = ({ children }) => {
//   const { data, loading, error } = useGetYomCoin();

//   return (
//     <CoinContext.Provider value={{ data, loading, error }}>
//       {children}
//     </CoinContext.Provider>
//   );
// };

// export { CoinProvider, CoinContext };
