"use client";

import Link from "next/link"

export default function navbar({ toggleDarkMode }: { toggleDarkMode: () => void }) {
    return (
        <div className="flex justify-between items-center p-5 bg-white drop-shadow-lg text-black dark:bg-gradient-to-r from-black to-gray-900 dark:text-white">
            <div className="bg-clip-text bg-gradient-to-r from-green-400 to-blue-500  p-2">
                {/* <img src="logo" alt="logo" /> */}
                <p className="text-3xl text-transparent font-bold">PLUTUS</p>
            </div>
            <div className="flex text-xl gap-10">
                <div onClick={toggleDarkMode} className="cursor-pointer">
                    Darkmode
                </div>
                <ul className="flex gap-10">
                    <li><Link href={"/prediction"}>AI prediction</Link></li>
                    <li><Link href={"/price-tracker"}>
                    <div className="bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        <p className="text-transparent font-bold">Crypto Price Tracker</p>
                    </div>
                    </Link></li>
                </ul>
            </div>
        </div>
    )
}