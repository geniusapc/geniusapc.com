import React from 'react';

import { about } from '../../resources';
import Typewriter from './Typewriter';



function Terminal({ className }) {
    return (
        <div
            className={`w-full md:w-[500px] h-[240px] md:h-[270px] bg-gray200 rounded ${className}`}
        >
            <div className="bg-gradient-to-r from-[#11152c] to-[#0a0d38] rounded-lg select-none border border-[#1F223C] relative">
                <div className="flex flex-row">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-violet-600 w-full"></div>
                    <div className="h-[1px] bg-gradient-to-r from-violet-600 to-transparent w-full"></div>
                </div>
                <div className="px-8 py-5">
                    <div className="flex flex-row space-x-2">
                        <div className="rounded-full bg-red-400 w-3 h-3"></div>
                        <div className="rounded-full bg-orange-400 w-3 h-3"></div>
                        <div className="rounded-full bg-green-200 w-3 h-3"></div>
                    </div>
                </div>
                <div className="px-8 py-8 border-t-[2px] border-indigo-950 overflow-hidden  h-[350px]">
                    <Typewriter />
                </div>
            </div>
        </div>
    );
}

export default Terminal;
