"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from "react";

interface Coin {
  ath: number;
  ath_change_percentage: number;
  ath_date: string; 
  atl: number;
  atl_change_percentage: number;
  atl_date: string; 
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string; // URL of image
  last_updated: string; 
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number | null; 
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null | { times: number; currency: string; percentage: number }; 
  symbol: string;
  total_supply: number;
  total_volume: number;
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

  const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`;

  const fetchData = useCallback(() => {
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data: Coin[]) => { setData(data); console.log("Updated API Data:", data); })
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
