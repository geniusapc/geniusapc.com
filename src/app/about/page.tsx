'use client';
import React, { useEffect, useState } from 'react';
import AboutNav from '@/component/About/AboutNav';
import AboutTags from '@/component/About/AboutTags';
import { faHtml5, faJs } from '@fortawesome/free-brands-svg-icons';
import { useRouter, useSearchParams } from 'next/navigation';
import { Tab, TabMap } from '@/component/About/types';
import { Tabs } from '@/component/About/enums';
import TopBorder from '@/component/Border/TopBorder';
import Skills from '@/component/About/Skills';
import Profile from '@/component/About/Profile';
import Certification from '@/component/About/Certification';
import { motion, AnimatePresence } from 'framer-motion';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import useIsMobile from '@/hooks/useIsMobile';

export default function Page() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const defaultTab = Tabs[Tabs.about];
    const [currentTab, setCurrentTab] = useState<Tab>();
    const [mountedTab, setMountedTab] = useState<string | null>(null);
    const tab = searchParams.get('tab') || defaultTab;

    const isMobile = useIsMobile()

    useEffect(() => {
        const curentTab = tab in Tabs ? tab : defaultTab;

        if (!isMobile && curentTab === Tabs.profile) {
            router.replace(`/about?tab=${defaultTab}`);
            return;
        }
        setCurrentTab(tabs[Tabs[curentTab as keyof typeof Tabs]]);
        setMountedTab(tab); // for AnimatePresence keying

    }, [tab, defaultTab, isMobile, router]);

    return (
        <main
            className="flex flex-col md:flex-row h-full md:justify-between overflow-hidden md:pl-12 select-none"
            id="about"
        >
            <div className="bg-gray100 w-full h-full mb-12">
                <TopBorder />
                <AboutNav selectedTab={currentTab} tabs={tabs} />

                <section className="p-1 mt-8 md:p-4 h-full w-full pb-20 flex">
                    <div className="w-full lg:w-3/5 border-gray300 border-r-[1px] p-4 pb-24 overflow-y-scroll">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={mountedTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                            >
                                {currentTab?.Component?.()}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="hidden w-2/5 h-full p-4 gap-8 lg:flex flex-col items-center justify-center"
                    >
                        <Profile />
                    </motion.div>
                </section>
            </div>
        </main>
    );
}

const tabs: TabMap = {
    [Tabs.profile]: {
        id: 'profile',
        name: 'profile',
        title: 'profile.tsx',
        icon: faUser,
        tab: 'profile',
        Component: Profile,
        isMobileOnly: true
    },
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
        name: 'certifications',
        title: 'certification.md',
        icon: faHtml5,
        tab: 'certifications',
        Component: Certification,
    },

};
