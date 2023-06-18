'use client';
import React from 'react';
import Terminal from '../component/Landing/Terminal';
import Folders from '../component/Landing/Folders';

export default function Page() {

    return (
        <main className="flex flex-col md:flex-row  h-full justify-start gap-24 md:justify-between overflow-hidden z-50 ">
            <Folders className="order-2 md:order-1" />
            <Terminal className="order-1 md:order-2 self-center md:self-auto" />
        </main>
    );
}
