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
    classname?: string;
}

export default function CardH({ coin, classname }: CardHProps) {
    return (
        <div className={classname ? classname : "text-black dark:text-white"}>
            <Link href={`price-tracker/${coin.id}`}>
                <div className="flex items-center gap-2 justify-between p-4">
                    <div className="flex gap-2 items-center">
                        <img
                            src={coin.image}
                            alt={coin.name}
                            width={30}
                            height={30}
                            className="mx-auto mb-4"
                        />
                        <h2 className="text-xl font-semibold font-semibold mb-4">
                            {coin.name} - {coin.symbol}
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