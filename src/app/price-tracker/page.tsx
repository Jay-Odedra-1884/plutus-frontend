"use client";

import { APIDataContext } from "@/hooks/UseApi";
import { useContext } from "react";
import { Graph } from "@/components/Graph";
import CardH from "@/components/CardH";

export default function PriceTrackerPage() {
  const context = useContext(APIDataContext);

  if (!context) {
    throw new Error("Error in Context");
  }

  const { data } = context;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div>
        <h1 className="text-3xl font-bold text-center mb-8">
          Cryptocurrency Prices
        </h1>
      </div>
      <div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((coin) => (
            <CardH coin={coin} />
          ))}
        </div>
      </div>
    </div>
  );
}
