"use client";

import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from "react";

//object interface 
interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation?: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply?: number;
  max_supply?: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi?: {
    times: number;
    currency: string;
    percentage: number;
  };
  last_updated: string;
}

//we are sending data and function so make interface
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

//provider
export const APIDataProvider = ({ children }: APIDataProviderProps) => {
  const [data, setData] = useState<Coin[]>([]);

  const API =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&x_cg_demo_api_key=CG-dKKyQq4KPqGeHfFMj2quQMZ2";

  const fetchData = useCallback(() => {
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data: Coin[]) => setData(data))
      .catch((e) => console.error("Error fetching data:", e));
  }, [API]);

  useEffect(() => {
    fetchData(); 

    //setting interval
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval); 

  }, [fetchData]);

  return (
    <APIDataContext.Provider value={{ data, fetchData }}>
      {children}
    </APIDataContext.Provider>
  );
};
