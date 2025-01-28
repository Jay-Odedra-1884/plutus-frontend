"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface GraphProps {
  coinId: string; // The id of the coin (e.g., "bitcoin" or "solana")
}

export const Graph = ({ coinId }: GraphProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [chartData, setChartData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistoricalData = async () => {
      try {
        const API = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1`;
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error("Failed to fetch historical data");
        }
        const data = await response.json();

        const prices = data.prices.map((price: number[]) => ({
          time: new Date(price[0]).toLocaleTimeString("en-US"),
          value: price[1],
        }));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const labels = prices.map((entry: any) => entry.time);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const values = prices.map((entry: any) => entry.value);

        setChartData({
          labels,
          datasets: [
            {
              label: `${coinId} Price (Last 24 Hours)`,
              data: values,
              borderColor: "rgb(53, 162, 235)", // Line color
              backgroundColor: "rgba(53, 162, 235, 0.1)", // Lighter fill color
              borderWidth: 1.5, // Reduced line thickness
              tension: 0.3, // Smoother lines
              pointRadius: 0, // Remove data points
              fill: true, // Fill the area under the graph line
            },
          ],
        });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        setError(error.message);
        console.error(
          `Error fetching 24-hour price data for ${coinId}:`,
          error
        );
      }
    };

    fetchHistoricalData();
  }, [coinId]);

  if (error) {
    return (
      <p className="text-red-500">Error fetching 24-hour price data: {error}</p>
    );
  }

  if (!chartData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full h-80 bg-theme_gray-light dark:bg-theme_gray-dark rounded-lg shadow-md mt-2 ">
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "top",
              labels: {
                font: {
                  size: 14,
                  family: "Arial, sans-serif",
                },
                color: "#333",
              },
            },
            tooltip: {
              backgroundColor: "#fff",
              titleColor: "#333",
              bodyColor: "#333",
              borderColor: "#ccc",
              borderWidth: 1,
              padding: 10,
            },
            title: {
              display: true,
              text: `${coinId} Price Chart (24 Hours)`,
              font: {
                size: 16,
                family: "Arial, sans-serif",
              },
              color: "green",
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Time",
                font: {
                  size: 14,
                  family: "Arial, sans-serif",
                },
                color: "#DA0046",
              },
              grid: {
                display: false, // Hide the x-axis grid lines
              },
            },
            y: {
              title: {
                display: true,
                text: "Price (USD)",
                font: {
                  size: 14,
                  family: "Arial, sans-serif",
                },
                color: "#DA0046",
              },
              ticks: {
                maxTicksLimit: 6, // Limit the number of ticks
              },
              grid: {
                color: "rgba(53, 162, 235, 0.1)", // Subtle grid lines for y-axis
              },
              beginAtZero: false, // The correct place to apply this option in Chart.js v3+
            },
          },
        }}
        data={chartData}
      />
    </div>
  );
};



