'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface ConsoleFooterProps {
    projectCount: number;
    filteredCount: number;
}

const ConsoleFooter = ({ projectCount, filteredCount }: ConsoleFooterProps) => {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        const logMessages = [
            `[INFO] Loaded ${projectCount} projects from database`,
            `[SUCCESS] All projects rendered successfully`,
            `[INFO] Displaying ${filteredCount} of ${projectCount} projects`,
        ];

        logMessages.forEach((msg, index) => {
            setTimeout(() => {
                setLogs((prev) => [...prev, msg]);
            }, index * 500);
        });
    }, [projectCount, filteredCount]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="fixed bottom-0 left-0 right-0 md:left-20 lg:left-40 bg-[#0d1117] border-t border-[#30363d] z-50"
        >
            <div className="flex items-center justify-between px-2 sm:px-4 py-1.5 sm:py-2">
                {/* Console output */}
                <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto flex-1 min-w-0">
                    <FontAwesomeIcon icon={faTerminal} className="text-green-400 text-[10px] sm:text-xs flex-shrink-0" />
                    <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono overflow-hidden">
                        {logs.map((log, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className={`whitespace-nowrap truncate ${log.includes('[SUCCESS]')
                                    ? 'text-green-400'
                                    : log.includes('[ERROR]')
                                        ? 'text-red-400'
                                        : 'text-gray-500'
                                    }`}
                            >
                                {log}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Status indicators */}
                <div className="flex items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-mono text-gray-500 flex-shrink-0 ml-2">
                    <span className="hidden md:flex items-center gap-1">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-400" />
                        Build: Passing
                    </span>
                    <span className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 md:hidden" />
                        {filteredCount}/{projectCount}
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

export default ConsoleFooter;
