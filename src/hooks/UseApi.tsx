"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from "react";

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  high_24h: number;
  low_24h: number;
}

interface APIDataContextType {
  data: Coin[];
  fetchData: () => void;
}

export const APIDataContext = createContext<APIDataContextType | undefined>(
  undefined
);

interface APIDataProviderProps {
  children: ReactNode;
}

export const APIDataProvider = ({ children }: APIDataProviderProps) => {
  const [data, setData] = useState<Coin[]>([]);

  const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,solana`;

  const fetchData = useCallback(() => {
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data: Coin[]) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [API]);

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 60000); // Update data every 60 seconds

    return () => clearInterval(interval);
  }, [fetchData]);

  return (
    <APIDataContext.Provider value={{ data, fetchData }}>
      {children}
    </APIDataContext.Provider>
  );
};
