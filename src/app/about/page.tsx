'use client';
import React, { useEffect, useState } from 'react';
import AboutNav from '@/component/About/AboutNav';
import AboutTags from '@/component/About/AboutTags';
import { faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';
import { useSearchParams } from 'next/navigation';
import { Tab, TabMap } from '@/component/About/types';
import { Tabs } from '@/component/About/enums';
import TopBorder from '@/component/Border/TopBorder';
import Skills from '@/component/About/Skills';
import Profile from '@/component/About/Profile';
import Certification from '@/component/About/CertOfCompletion';

export default function Page() {
    const searchParams = useSearchParams();
    const defaultTab = Tabs[Tabs.about];
    const [currentTab, setCurrentTab] = useState<Tab>();
    const tab = searchParams.get('tab') || defaultTab;

    useEffect(() => {
        const curentTab = tab in Tabs ? tab : defaultTab;
        setCurrentTab(tabs[Tabs[curentTab as keyof typeof Tabs]]);
    }, [tab, defaultTab]);

    return (
        <main className="flex flex-col md:flex-row  h-full  md:justify-between  overflow-hidden md:pl-12 md:pt-12 select-none">
            <div className="bg-gray100 w-full h-full mb-12">
                <TopBorder />
                <AboutNav selectedTab={currentTab} tabs={tabs} />
                <section className="p-1 md:p-4 h-full  w-full pb-20 flex ">
                    <div className="w-full lg:w-3/5  border-gray300 border-r-[1px] p-4 pb-24 overflow-y-scroll ">
                        {currentTab?.Component?.()}
                    </div>
                    <div className="hidden w-2/5 h-full p-4  gap-8 lg:flex flex-col items-center justify-center">
                        <Profile />
                    </div>
                </section>
            </div>
        </main>
    );
}


const tabs: TabMap = {
    [Tabs.about]: {
        id: Tabs.about,
        name: 'about',
        title: 'about.html',
        icon: faHtml5,
        tab: 'about',
        Component: AboutTags,
    },
    [Tabs.skills]: {
        id: Tabs.skills,
        name: 'skills',
        title: 'skills.ts',
        icon: faJs,
        tab: 'skills',
        Component: Skills,
    },
    [Tabs.certifications]: {
        id: Tabs.certifications,
        name: 'Certifications',
        title: 'certifications.md',
        icon: faHtml5,
        tab: 'certifications',
        Component: Certification,
    },
};
