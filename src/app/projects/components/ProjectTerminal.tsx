/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IProject } from '../enum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
    faLink,
    faTerminal,
    faCodeBranch,
    faFolder,
    faPlay
} from '@fortawesome/free-solid-svg-icons';

interface ProjectTerminalProps {
    project: IProject;
    index: number;
}

const ProjectTerminal = ({ project, index }: ProjectTerminalProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentLine, setCurrentLine] = useState(0);

    const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-');
    const techArray = project.technologies.split(',').map((t) => t.trim());

    // Simulate typing effect for expanded content
    useEffect(() => {
        if (isExpanded && currentLine < project.features.length) {
            const timer = setTimeout(() => {
                setCurrentLine((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isExpanded, currentLine, project.features.length]);

    const handleExpand = () => {
        setIsExpanded(!isExpanded);
        if (!isExpanded) setCurrentLine(0);
    };

    return (
        <motion.div
            className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden shadow-2xl h-full flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            {/* Terminal Header */}
            <div className="bg-[#161b22] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-[#30363d]">
                <div className="flex items-center gap-2 min-w-0 flex-1">
                    <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]" />
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]" />
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="ml-2 sm:ml-3 text-gray-400 text-xs sm:text-sm font-mono flex items-center gap-1 sm:gap-2 truncate">
                        <FontAwesomeIcon icon={faTerminal} className="text-green-400 flex-shrink-0" />
                        <span className="truncate">~/{projectSlug}</span>
                    </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <span className="text-[10px] sm:text-xs text-gray-500 flex items-center gap-1">
                        <FontAwesomeIcon icon={faCodeBranch} className="text-purple-400" />
                        <span className="hidden xs:inline">main</span>
                    </span>
                </div>
            </div>

            {/* Project Image with Overlay */}
            <div className="relative group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 sm:h-40 md:h-44 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
                <div className="absolute bottom-2 sm:bottom-3 left-3 sm:left-4 flex items-center gap-2">
                    <FontAwesomeIcon icon={faFolder} className="text-blue-400 text-sm sm:text-base" />
                    <span className="text-white font-semibold text-sm sm:text-base md:text-lg">{project.title}</span>
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-3 sm:p-4 font-mono text-xs sm:text-sm flex-1">
                {/* Command Prompt */}
                <div className="flex items-start gap-2 mb-2 sm:mb-3">
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300">cat README.md</span>
                </div>

                {/* Output - Description */}
                <div className="pl-3 sm:pl-4 mb-3 sm:mb-4 text-gray-400 leading-relaxed border-l-2 border-[#30363d]">
                    <span className="text-purple-400"># </span>
                    <span className="text-white text-sm sm:text-base">{project.title}</span>
                    <p className="mt-1.5 sm:mt-2 text-gray-400 text-xs sm:text-sm line-clamp-3">{project.description}</p>
                </div>

                {/* Tech Stack Command */}
                <div className="flex items-start gap-2 mb-2">
                    <span className="text-green-400">$</span>
                    <span className="text-gray-300">echo $TECH_STACK</span>
                </div>

                {/* Tech Tags */}
                <div className="pl-3 sm:pl-4 mb-3 sm:mb-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {techArray.map((tech, i) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded bg-[#21262d] text-cyan-400 border border-[#30363d] hover:border-cyan-400 transition-colors cursor-default"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                {/* Expandable Features Section */}
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <div className="flex items-start gap-2 mb-2">
                                <span className="text-green-400">$</span>
                                <span className="text-gray-300">ls -la features/</span>
                            </div>
                            <div className="pl-4 space-y-2 mb-4">
                                {project.features.slice(0, currentLine).map((feature, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        className="flex items-start gap-2 text-gray-400"
                                    >
                                        <span className="text-yellow-400">→</span>
                                        <span className="text-sm">{feature}</span>
                                    </motion.div>
                                ))}
                                {currentLine < project.features.length && (
                                    <span className="inline-block w-2 h-4 bg-green-400 animate-pulse" />
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Action Bar */}
            <div className="bg-[#161b22] px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-t border-[#30363d] mt-auto">
                <div className="flex items-center gap-3 sm:gap-4">
                    <a
                        href={project.github || '#'}
                        target={project.github ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm transition-colors ${project.github
                            ? 'text-gray-400 hover:text-white'
                            : 'text-gray-600 cursor-not-allowed'
                            }`}
                        title={project.github ? 'View Source Code' : 'Private Repository'}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                        <span className="hidden sm:inline">Source</span>
                    </a>
                    <a
                        href={project.site || '#'}
                        target={project.site ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm transition-colors ${project.site
                            ? 'text-gray-400 hover:text-green-400'
                            : 'text-gray-600 cursor-not-allowed'
                            }`}
                        title={project.site ? 'View Live Demo' : 'Demo Unavailable'}
                    >
                        <FontAwesomeIcon icon={faLink} />
                        <span className="hidden sm:inline">Demo</span>
                    </a>
                </div>
                <button
                    onClick={handleExpand}
                    className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 bg-[#238636] hover:bg-[#2ea043] text-white text-xs sm:text-sm rounded-md transition-colors"
                >
                    <FontAwesomeIcon icon={faPlay} className={`text-[10px] sm:text-xs transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    <span className="hidden xs:inline">{isExpanded ? 'Collapse' : 'Expand'}</span>
                    <span className="xs:hidden">{isExpanded ? '−' : '+'}</span>
                </button>
            </div>
        </motion.div>
    );
};

export default ProjectTerminal;
