'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IProject } from '../enum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
    faLink,
    faChevronRight,
    faFolder,
    faFileCode,
    faCircle,
} from '@fortawesome/free-solid-svg-icons';

interface ProjectListItemProps {
    project: IProject;
    index: number;
}

const ProjectListItem = ({ project, index }: ProjectListItemProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const techArray = project.technologies.split(',').map((t) => t.trim());
    const primaryTech = techArray[0] || 'TypeScript';

    // Get color based on primary tech
    const getTechColor = (tech: string): string => {
        const colors: Record<string, string> = {
            'Node.js': '#339933',
            'NestJS': '#E0234E',
            'Next.js': '#ffffff',
            'React': '#61DAFB',
            'React.js': '#61DAFB',
            'TypeScript': '#3178C6',
            'AWS': '#FF9900',
            'MongoDB': '#47A248',
            'Tailwind': '#06B6D4',
            'TailwindCSS': '#06B6D4',
        };
        return colors[tech] || '#8B5CF6';
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            viewport={{ once: true }}
            className="border-b border-[#21262d] last:border-b-0"
        >
            <div
                className="flex items-center gap-4 px-4 py-3 hover:bg-[#161b22] cursor-pointer transition-colors group"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {/* Expand icon */}
                <motion.div
                    animate={{ rotate: isExpanded ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-gray-500"
                >
                    <FontAwesomeIcon icon={faChevronRight} className="text-xs" />
                </motion.div>

                {/* Folder icon */}
                <FontAwesomeIcon
                    icon={faFolder}
                    className={`text-blue-400 transition-colors ${isExpanded ? 'text-yellow-400' : ''}`}
                />

                {/* Project name */}
                <span className="font-mono text-sm text-blue-400 hover:underline flex-1 truncate">
                    {project.title}
                </span>

                {/* Tech indicator */}
                <div className="hidden sm:flex items-center gap-2">
                    <FontAwesomeIcon
                        icon={faCircle}
                        className="text-xs"
                        style={{ color: getTechColor(primaryTech) }}
                    />
                    <span className="text-xs text-gray-500 font-mono">{primaryTech}</span>
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    )}
                    {project.site && (
                        <a
                            href={project.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="text-gray-400 hover:text-green-400 transition-colors"
                        >
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                    )}
                </div>
            </div>

            {/* Expanded content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden bg-[#0d1117] border-l-2 border-[#30363d] ml-6"
                    >
                        <div className="p-4 font-mono text-sm">
                            {/* README preview */}
                            <div className="flex items-center gap-2 mb-3 text-gray-400">
                                <FontAwesomeIcon icon={faFileCode} className="text-green-400" />
                                <span>README.md</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-400 text-sm mb-4 pl-6 leading-relaxed">
                                {project.description}
                            </p>

                            {/* Features as file tree */}
                            <div className="pl-6 space-y-1 mb-4">
                                {project.features.slice(0, 4).map((feature, i) => (
                                    <div key={i} className="flex items-start gap-2 text-gray-500 text-xs">
                                        <span className="text-gray-600">├──</span>
                                        <span className="text-gray-400">{feature}</span>
                                    </div>
                                ))}
                                {project.features.length > 4 && (
                                    <div className="flex items-start gap-2 text-gray-600 text-xs">
                                        <span>└──</span>
                                        <span className="text-purple-400">
                                            +{project.features.length - 4} more features...
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Tech stack */}
                            <div className="pl-6 flex flex-wrap gap-2">
                                {techArray.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-0.5 text-xs rounded bg-[#21262d] text-gray-400 border border-[#30363d]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ProjectListItem;
