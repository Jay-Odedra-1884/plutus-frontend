"use client";

import Link from "next/link"

export default function navbar({ toggleDarkMode }: { toggleDarkMode: () => void }) {
    return (
        <div className="flex justify-between items-center p-5 bg-theme_black-light text-black dark:bg-theme_black-dark dark:text-white">
            <div className="bg-clip-text bg-theme_red-light dark:bg-theme_red-dark  p-2">
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
                    <div className="bg-clip-text bg-theme_red-dark">
                        <p className="text-transparent font-bold">Crypto Price Tracker</p>
                    </div>
                    </Link></li>
                </ul>
            </div>
        </div>
    )
}