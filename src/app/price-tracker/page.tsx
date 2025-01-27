"use client";

import { APIDataContext } from "@/hooks/UseApi";
import { useContext } from "react";
import CardH from "@/components/CardH";

export default function PriceTrackerPage() {
  const context = useContext(APIDataContext);

  if (!context) {
    throw new Error("Error in Context");
  }

  const { data } = context;

  return (
    <div className="mx-auto md:rounded-2xl rounded-none shadow-md">
      <div className="bg-theme_black-light dark:bg-theme_black-dark md:rounded-t-2xl rounded-none h-16 md:w-96 w-full p-3">
        <h1 className="text-3xl text-black dark:text-white font-bold text-center mb-8">
          Cryptocurrency Prices
        </h1>
      </div>
      <div className="bg-theme_black-light dark:bg-theme_black-dark p-5 md:rounded-b-2xl md:rounded-r-2xl ">
      <div className="h-screen overflow-y-auto">
        <div className="flex flex-col gap-3">
          {data.map((coin) => (
            <CardH key={coin.id} coin={coin} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
