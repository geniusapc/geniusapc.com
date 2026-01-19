import React from "react";
import Typewriter from "./Typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";

function Terminal({ className }: { className: string }) {
    return (
        <div
            className={`w-full lg:w-[520px] xl:w-[560px] bg-gray200 rounded-xl shadow-2xl shadow-black/50 ${className}`}
        >
            <div className="bg-gray100 rounded-xl select-none border border-gray300/50 overflow-hidden">
                {/* Title Bar - Mac style */}
                <div className="bg-gradient-to-b from-gray300/80 to-gray300/40 px-3 xs:px-4 py-2.5 xs:py-3 flex items-center justify-between">
                    {/* Traffic light buttons */}
                    <div className="flex items-center gap-1.5 xs:gap-2">
                        <div className="group relative">
                            <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 cursor-pointer transition-colors shadow-inner" />
                        </div>
                        <div className="group relative">
                            <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 cursor-pointer transition-colors shadow-inner" />
                        </div>
                        <div className="group relative">
                            <div className="w-3 h-3 xs:w-3.5 xs:h-3.5 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 cursor-pointer transition-colors shadow-inner" />
                        </div>
                    </div>

                    {/* Title - centered */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                        <FontAwesomeIcon icon={faTerminal} className="text-[10px] xs:text-xs text-gray-400" />
                        <span className="text-[11px] xs:text-xs text-gray-400 font-medium">geniusapc — bash</span>
                    </div>

                    {/* Spacer for balance */}
                    <div className="w-14" />
                </div>

                {/* Terminal Content */}
                <div className="px-4 xs:px-6 py-4 xs:py-6 min-h-[300px] xs:min-h-[340px] lg:min-h-[380px] xl:min-h-[400px] bg-gray100 font-mono text-sm">
                    {/* System info header */}
                    <div className="text-gray-500 text-[10px] xs:text-xs mb-3 xs:mb-4 pb-2 xs:pb-3 border-b border-gray300/30">
                        Last login: {new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })} on ttys001
                    </div>
                    <Typewriter />
                </div>
            </div>
        </div>
    );
}

export default Terminal;
