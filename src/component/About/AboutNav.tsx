import React from "react";
import Link from "next/link";
import { faCode, faTimes } from "@fortawesome/free-solid-svg-icons";
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
      {/* Top bar */}
      <div className="bg-gray200 flex justify-between py-2 px-2 md:px-4 border-b border-gray300">
        <FontAwesomeIcon icon={faCode} className="w-4 h-4 text-blue-400" />
        {selectedTab && (
          <span className="text-sm">{selectedTab.title} - geniusapc.com</span>
        )}
        <Link href="/">
          <FontAwesomeIcon className="cursor-pointer" icon={faTimes} />
        </Link>
      </div>


      <div className="w-full bg-gray200  h-8 flex  text-center text-sm   flex flex-wrap md:flex-nowrap">
        {visibleTabs.map((tab) => (
          <NavTabitem key={tab.id} selectedTab={selectedTab} tab={tab} />
        ))}
        <div className=" w-full border-b-[1px] border-gray300"></div>
      </div>


    </nav>

  );
}
