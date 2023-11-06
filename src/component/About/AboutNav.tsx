import React from 'react';
import Link from 'next/link';
import { faCode, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavTabitem from './NavTabitem';
import { IAboutNav } from './types';



export default function AboutNav({ selectedTab, tabs }: IAboutNav) {
    const tabList = Object.values(tabs)
    return (
        <nav>
            <div className="bg-gray200 flex justify-between py-1 px-2 border-b-[1px] border-gray300">
                <FontAwesomeIcon icon={faCode} className="text-blue200" />
                {selectedTab && <span className="text-sm">{selectedTab?.title} - geniusapc.com</span>}
                <Link href={'/'}>
                    <FontAwesomeIcon className="cursor-pointer" icon={faTimes} />
                </Link>
            </div>
            <div className="w-full bg-gray200  h-8 flex  text-center text-sm">
                {tabList.map((tab) => (
                    <NavTabitem key={tab.id} selectedTab={selectedTab} tab={tab} />
                )
                )}
                <div className=" w-full border-b-[1px] border-gray300"></div>
            </div>
        </nav>
    );
}


