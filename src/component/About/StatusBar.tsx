'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faCircle, faBell } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface StatusBarProps {
    fileName?: string;
    language?: string;
}

const StatusBar = ({ fileName = 'about.html', language = 'HTML' }: StatusBarProps) => {
    return (
        <div className="fixed bottom-16 md:bottom-0 left-0 md:left-20 right-0 bg-blue200 text-white text-xs h-6 flex items-center justify-between px-2 md:px-4 font-mono z-40">
            {/* Left side */}
            <div className="flex items-center gap-3 md:gap-4">
                <div className="flex items-center gap-1.5 hover:bg-blue-600 px-2 py-0.5 cursor-pointer">
                    <FontAwesomeIcon icon={faCodeBranch} className="w-3 h-3" />
                    <span className="hidden xs:inline">main</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faCircle} className="w-2 h-2 text-green-400" />
                    <span className="hidden sm:inline">0 errors</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <FontAwesomeIcon icon={faCircle} className="w-2 h-2 text-yellow-400" />
                    <span className="hidden sm:inline">0 warnings</span>
                </div>
            </div>

            {/* Center - file name on mobile */}
            <div className="sm:hidden text-gray-300 truncate max-w-[100px]">
                {fileName}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-3 md:gap-4">
                <span className="hidden md:inline text-gray-300">Ln 1, Col 1</span>
                <span className="hidden xs:inline text-gray-300">{language}</span>
                <span className="hidden lg:inline text-gray-300">UTF-8</span>
                <div className="flex items-center gap-1.5 hover:bg-blue-600 px-2 py-0.5 cursor-pointer">
                    <FontAwesomeIcon icon={faGithub} className="w-3 h-3" />
                </div>
                <div className="hidden sm:flex items-center gap-1.5 hover:bg-blue-600 px-2 py-0.5 cursor-pointer">
                    <FontAwesomeIcon icon={faBell} className="w-3 h-3" />
                </div>
            </div>
        </div>
    );
};

export default StatusBar;
