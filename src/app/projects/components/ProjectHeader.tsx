'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCodeBranch,
    faFolder,
    faTerminal,
    faStar,
    faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface ProjectHeaderProps {
    totalProjects: number;
    searchTerm?: string;
    // eslint-disable-next-line no-unused-vars
    setSearchTerm?: (term: string) => void;
}

const ProjectHeader = ({ totalProjects, searchTerm = '', setSearchTerm }: ProjectHeaderProps) => {
    const [typedText, setTypedText] = useState('');
    const [typingDone, setTypingDone] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const fullText = 'cd ~/projects && ls -la';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setTypedText(fullText.substring(0, index));
                index++;
            } else {
                clearInterval(timer);
                setTypingDone(true);
            }
        }, 50);
        return () => clearInterval(timer);
    }, []);

    // Focus input when clicking on terminal area
    const handleTerminalClick = () => {
        if (typingDone && inputRef.current) {
            inputRef.current.focus();
        }
    };

    // Keyboard shortcut: Ctrl/Cmd + K to focus search
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                inputRef.current?.focus();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className="mb-6 sm:mb-8">
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
                            <FontAwesomeIcon icon={faEye} />
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

                {/* Terminal command with search input */}
                <div
                    className="bg-[#0d1117] px-3 sm:px-4 py-2 sm:py-3 font-mono text-xs sm:text-sm border-t border-[#30363d] cursor-text"
                    onClick={handleTerminalClick}
                >
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faTerminal} className="text-green-400 flex-shrink-0" />
                        <span className="text-green-400">~</span>
                        <span className="text-gray-300 whitespace-nowrap">{typedText}</span>

                        {/* Search input that appears after typing animation */}
                        {typingDone && setSearchTerm ? (
                            <div className="flex items-center flex-1 min-w-0">
                                <span className="text-gray-500 mx-1">|</span>
                                <span className="text-yellow-400 mr-1">grep</span>
                                <div className="relative flex-1 flex items-center">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        placeholder="search..."
                                        className="bg-transparent border-none outline-none text-gray-300 placeholder-gray-600 w-full min-w-[60px] caret-green-400"
                                        style={{ caretColor: '#4ade80' }}
                                    />
                                    {/* Blinking cursor when empty and not focused */}
                                    {!searchTerm && (
                                        <motion.span
                                            animate={{ opacity: [1, 0] }}
                                            transition={{ duration: 0.8, repeat: Infinity }}
                                            className="absolute left-0 inline-block w-2 h-4 bg-green-400 pointer-events-none"
                                        />
                                    )}
                                </div>
                            </div>
                        ) : (
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-2 h-4 bg-green-400 ml-0.5"
                            />
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectHeader;
