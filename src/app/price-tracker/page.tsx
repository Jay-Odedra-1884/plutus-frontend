"use client";

import { APIDataContext } from "@/hooks/UseApi";
import { useContext } from "react";
import { Graph } from "@/components/Graph";

export default function PriceTrackerPage() {
  const context = useContext(APIDataContext);

  if (!context) {
    throw new Error("Error in Context");
  }

  const { data } = context;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center mb-8">
        Cryptocurrency Prices
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((coin) => (
          <div
            key={coin.id}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <img
              src={coin.image}
              alt={coin.name}
              width={30}
              height={30}
              className="mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {coin.name}
            </h2>
            <p className="text-lg">
              <strong>Current Price:</strong> ${coin.current_price}
            </p>
            <p className="text-lg">
              <strong>24H High:</strong> ${coin.high_24h}
            </p>
            <p className="text-lg mb-4">
              <strong>24H Low:</strong> ${coin.low_24h}
            </p>
            {/* Render the Graph for each coin */}
            <Graph coinId={coin.id} />
          </div>
        ))}
      </div>
    </div>
  );
}
