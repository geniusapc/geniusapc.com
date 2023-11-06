'use client';
import React from 'react';
import Terminal from '../component/Landing/Terminal';
import Folders from '../component/Landing/Folders';

export default function Page() {

    return (
        <main className="flex flex-col md:flex-row  h-full justify-start md:gap-24 md:justify-between overflow-y-auto  md:overflow-hidden z-50  select-none">
            <Folders className="" />
            <Terminal className="invisible md:visible md:self-auto" />
        </main>
    );
}
