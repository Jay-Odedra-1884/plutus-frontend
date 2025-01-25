"use client";

import { APIDataContext } from "@/hooks/UseApi";
import { useContext } from "react";

export default function PriceTrackerPage() {
   const context = useContext(APIDataContext);

   if (!context) {
     throw new Error("Error in Context");
   }

   console.log(context);
   const { data } = context;

   return (
     <div>
       <h1>Cryptocurrency Prices</h1>
       {data.map((coin) => (
         <div key={coin.id}>
           <img src={coin.image} alt={coin.name} width={30} height={30} />
           <strong>{coin.name}</strong>: ${coin.current_price}
           <div>
             {" "}
             <strong>LOW</strong>: ${coin.low_24h}
           </div>
           <div>
             <strong>High</strong>: ${coin.high_24h}
           </div>
         </div>
       ))}
     </div>
   );
}
