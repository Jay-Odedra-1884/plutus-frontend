"use client"

import { APIDataContext } from "@/hooks/UseApi";
import { useParams } from "next/navigation";
import { useContext } from "react";
import CardH from "@/components/CardH";
import { Graph } from "@/components/Graph";


export default function Page() {
  const { id } = useParams();

  const context = useContext(APIDataContext);

  if (!context) {
    throw new Error("Error in Context");
  }

  const { data } = context;
  const coin = data.find((coin) => coin.id === id);


  if (!data.length) {
    return <div>Loading...</div>;
  }

  if (!coin) {
    return <div>Coin not found. Please check the URL.</div>;
  }

  return (
    <div className="flex flex-col">
      <div>
        <CardH coin={coin} classname="text-black dark:text-white bg-theme_gray-light dark:bg-theme_gray-dark rounded-none md:rounded-t-2xl"></CardH>
      </div>
      <div className="bg-theme_gray-light dark:bg-theme_gray-dark md:bg-black">
        <Graph coinId={coin.id}></Graph>
      </div>
      <div className="w-full text-black dark:text-white bg-theme_gray-light dark:bg-theme_gray-dark rounded-none md:rounded-t-lg md:rounded-b-2xl grid grid-cols-1 lg:grid-cols-3 gap-10 justify-between p-5 mt-2 ">
        <p className="text-lg flex gap-1 py-4">
          <strong className="sm:block hidden">Current Price:</strong> ${coin.current_price}
        </p>
        <p className="text-lg flex gap-1 py-4">
          <strong className="sm:block hidden">
            Market Cap:</strong> ${coin.market_cap}
        </p>
        <p className="text-lg flex gap-1 py-4">
          <strong className="sm:block hidden">Total volume
            :</strong> ${coin.total_volume
          }
        </p>
        <p className="text-lg flex gap-1 py-4">
          <strong className="sm:block hidden">Price change percentage 24h
            :</strong> ${coin.price_change_percentage_24h
          }
        </p>
        <p className="text-lg flex gap-1 py-4">
          <strong className="sm:block hidden">market_cap_rank
            :</strong> ${coin.market_cap_rank
          }
        </p>
      </div>
    </div>
  );
}