'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCodeBranch,
    faFolder,
    faTerminal,
    faStar,
    faCodeFork,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface ProjectHeaderProps {
    totalProjects: number;
}

const ProjectHeader = ({ totalProjects }: ProjectHeaderProps) => {
    const [typedText, setTypedText] = useState('');
    const fullText = 'cd ~/projects && ls -la';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.substring(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="mb-8">
            {/* GitHub-style header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden"
            >
                {/* Top bar */}
                <div className="bg-[#0d1117] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-[#30363d] flex-wrap gap-2">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <FontAwesomeIcon icon={faGithub} className="text-white text-lg sm:text-xl flex-shrink-0" />
                        <span className="text-gray-400 text-xs sm:text-sm font-mono truncate">
                            <span className="text-blue-400">geniusapc</span>
                            <span className="mx-1">/</span>
                            <span className="text-white font-semibold">portfolio-projects</span>
                        </span>
                        <span className="hidden xs:inline px-2 py-0.5 text-xs rounded-full border border-[#30363d] text-gray-400 flex-shrink-0">
                            Public
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-2 sm:gap-4 text-sm">
                        <span className="flex items-center gap-1 px-3 py-1 bg-[#21262d] border border-[#30363d] rounded-md text-gray-500">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                            <span>42</span>
                        </span>
                        <span className="flex items-center gap-1 px-3 py-1 bg-[#21262d] border border-[#30363d] rounded-md text-gray-500">
                            <FontAwesomeIcon icon={faCodeFork} />
                            <span>12</span>
                        </span>
                    </div>
                </div>

                {/* Stats bar */}
                <div className="px-3 sm:px-4 py-2 flex items-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCodeBranch} className="text-purple-400" />
                        <span>main</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faFolder} className="text-blue-400" />
                        <span>{totalProjects} repos</span>
                    </div>
                </div>

                {/* Terminal command */}
                <div className="bg-[#0d1117] px-3 sm:px-4 py-2 sm:py-3 font-mono text-xs sm:text-sm border-t border-[#30363d] overflow-x-auto">
                    <div className="flex items-center gap-2 min-w-max">
                        <FontAwesomeIcon icon={faTerminal} className="text-green-400 flex-shrink-0" />
                        <span className="text-green-400">~</span>
                        <span className="text-gray-300">{typedText}</span>
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="inline-block w-2 h-4 bg-green-400 ml-0.5"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Decorative code comment */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-3 sm:mt-4 font-mono text-[10px] sm:text-xs text-gray-600"
            >
                <span className="text-gray-500">{'// '}</span>
                <span className="text-green-400">{totalProjects} projects</span>
                <span className="hidden sm:inline text-gray-500">{' - '}</span>
                <span className="hidden sm:inline text-purple-400">Built with passion & coffee ☕</span>
            </motion.div>
        </div>
    );
};

export default ProjectHeader;
