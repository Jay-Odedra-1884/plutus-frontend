import Link from "next/link";


interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    high_24h: number;
    low_24h: number;
  }

interface CardHProps {
    coin: Coin;
}

export default function CardH({ coin }: CardHProps) {
    return (
        <div className="text-black dark:text-white">
            <Link href={`/price-tracker/${coin.id}`}>
            <div className="flex items-center gap-2 justify-between bg-theme_gray-light dark:bg-theme_gray-dark p-4 rounded-lg">
            <div className="flex gap-2 items-center">
                <img
                    src={coin.image}
                    alt={coin.name}
                    width={30}
                    height={30}
                    className="mx-auto mb-4"
                />
                <h2 className="text-xl font-semibold font-semibold mb-4">
                    {coin.name}
                </h2>
            </div>
            <p className="text-lg flex gap-1">
                <strong className="sm:block hidden">Current Price:</strong> ${coin.current_price}
            </p>
            <p className="text-lg lg:block hidden">
                <strong>24H High:</strong> ${coin.high_24h}
            </p>
            <p className="text-lg mb-4 lg:block hidden">
                <strong>24H Low:</strong> ${coin.low_24h}
            </p>
        </div>
            </Link>
        </div>
    )
}