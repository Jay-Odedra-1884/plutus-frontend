"use client";

import Sidebar from "@/components/Sidebar";
import useDarkMode from "@/hooks/useDarkMode";

export default function priceTrackerLayout({children}: Readonly<{
    children: React.ReactNode;
  }>) {

    const {isDarkMode, toggleDarkMode} = useDarkMode();

    return (
        <div className="grid grid-cols-[230px_auto] gap-3 bg-white dark:bg-black p-5">
            <div>
                <Sidebar togglemode={toggleDarkMode}/>
            </div>
            <div>
            {children}
            </div>
        </div>
    )
}