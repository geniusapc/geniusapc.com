import React from "react";
import Link from "next/link";
import { faCode, faTimes, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavTabitem from "./NavTabitem";
import { IAboutNav } from "./types";
import useIsMobile from "@/hooks/useIsMobile";

export default function AboutNav({ selectedTab, tabs }: IAboutNav) {

  const isMobile = useIsMobile();

  const visibleTabs = Object.values(tabs).filter((tab) => {
    // Show if NOT mobile-only, or if it's mobile
    return !tab.isMobileOnly || isMobile;
  });



  return (
    <nav>
      {/* Top bar - Window controls */}
      <div className="bg-gray200 flex justify-between items-center py-1.5 xs:py-2 px-2 md:px-4 border-b border-gray300">
        <div className="flex items-center gap-2 xs:gap-3">
          <div className="flex gap-1 xs:gap-1.5">
            <FontAwesomeIcon icon={faCircle} className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-red-500" />
            <FontAwesomeIcon icon={faCircle} className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-yellow-500" />
            <FontAwesomeIcon icon={faCircle} className="w-2.5 h-2.5 xs:w-3 xs:h-3 text-green-500" />
          </div>
          <FontAwesomeIcon icon={faCode} className="w-3.5 h-3.5 xs:w-4 xs:h-4 text-blue-400 ml-1 xs:ml-2" />
        </div>
        {selectedTab && (
          <span className="text-xs xs:text-sm font-mono text-gray-400 truncate max-w-[120px] xs:max-w-[200px] sm:max-w-none">
            <span className="text-blue200">{selectedTab.title}</span>
            <span className="hidden sm:inline text-gray-500"> — </span>
            <span className="hidden sm:inline text-gray-500">geniusapc.com</span>
          </span>
        )}
        <Link href="/" className="hover:bg-gray300 p-1 rounded transition-colors">
          <FontAwesomeIcon className="cursor-pointer text-gray-400 hover:text-white w-3.5 h-3.5 xs:w-4 xs:h-4" icon={faTimes} />
        </Link>
      </div>


      <div className="w-full bg-gray200 h-9 flex text-center text-sm overflow-x-auto">
        {visibleTabs.map((tab) => (
          <NavTabitem key={tab.id} selectedTab={selectedTab} tab={tab} />
        ))}
        <div className="flex-1 border-b-[1px] border-gray300"></div>
      </div>


    </nav>

  );
}
