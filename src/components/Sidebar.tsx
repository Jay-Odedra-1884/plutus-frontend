"use client";

import Link from "next/link"

export default function Sidebar({togglemode, isDarkMode}: {togglemode: () => void, isDarkMode:boolean}) {
    return (
        <div className="bg-theme_black-light dark:bg-theme_black-dark text-black dark:text-white h-screen rounded-2xl p-4 text-center">
            <div className="bg-clip-text bg-theme_red-light dark:bg-theme_red-dark">
                <h1 className="text-transparent text-4xl font-semibold">PLUTUS</h1>
            </div>
            <hr className="m-5 border-black dark:border-white" />
            <div>
                <ul className="flex flex-col gap-3">
                    <li>

                        <Link href={"/"}><i className="fa-solid fa-house"></i>Home</Link>
                    </li>
                    <li>
                        {/* <Link href={"/price-tracker"}><i className="fa-regular fa-chart-bar"></i>Prices</Link> */}
                    </li>
                </ul>
            </div>
            <div className="m-5 cursor-pointer" onClick={togglemode}>
                {isDarkMode? "Lightmode" : "Darkmode"}
            </div>
        </div>
    )
}