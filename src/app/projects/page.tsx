'use client';
import React, { useState, useMemo } from 'react';
import { projects } from './data';
import { motion } from 'framer-motion';
import ProjectHeader from './components/ProjectHeader';
import FilterBar from './components/FilterBar';
import ProjectTerminal from './components/ProjectTerminal';
import ProjectListItem from './components/ProjectListItem';
import ConsoleFooter from './components/ConsoleFooter';
import TopBorder from '@/component/Border/TopBorder';

export default function Page() {
    const [view, setView] = useState<'grid' | 'list'>('grid');
    const [searchTerm, setSearchTerm] = useState('');

    // Filter projects based on search term
    const filteredProjects = useMemo(() => {
        if (!searchTerm.trim()) return projects;
        const term = searchTerm.toLowerCase();
        return projects.filter(
            (project) =>
                project.title.toLowerCase().includes(term) ||
                project.technologies.toLowerCase().includes(term) ||
                project.description.toLowerCase().includes(term)
        );
    }, [searchTerm]);

    return (
        <main className="h-full w-full overflow-hidden bg-[#0d1224]" id="projects">
            {/* Top gradient border to match theme */}
            <TopBorder />

            <div className="flex h-full">
                {/* Git Graph Sidebar - visible on large screens */}

                {/* Main Content Area */}
                <div className="flex-1 overflow-y-auto p-2 sm:p-4 md:p-6 lg:p-8 pb-16 sm:pb-20">
                    {/* GitHub-style Header */}
                    <ProjectHeader totalProjects={projects.length} />

                    {/* Filter Bar with Search & View Toggle */}
                    <FilterBar
                        view={view}
                        setView={setView}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />

                    {/* No results message */}
                    {filteredProjects.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-16 font-mono"
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <p className="text-gray-400">
                                <span className="text-red-400">Error:</span> No projects found matching &quot;{searchTerm}&quot;
                            </p>
                            <p className="text-gray-600 text-sm mt-2">
                                Try a different search term or clear the filter
                            </p>
                        </motion.div>
                    )}

                    {/* Grid View - Terminal Style Cards */}
                    {view === 'grid' && filteredProjects.length > 0 && (
                        <section className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 2xl:grid-cols-3">
                            {filteredProjects.map((project, index) => (
                                <ProjectTerminal
                                    key={project.title}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </section>
                    )}

                    {/* List View - File Explorer Style */}
                    {view === 'list' && filteredProjects.length > 0 && (
                        <motion.section
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-[#0d1117] border border-[#30363d] rounded-lg overflow-hidden"
                        >
                            {/* List Header */}
                            <div className="bg-[#161b22] px-4 py-2 border-b border-[#30363d] flex items-center gap-4 text-xs font-mono text-gray-500">
                                <span className="flex-1">Name</span>
                                <span className="hidden sm:block w-24">Language</span>
                                <span className="w-16 text-right">Links</span>
                            </div>

                            {/* List Items */}
                            {filteredProjects.map((project, index) => (
                                <ProjectListItem
                                    key={project.title}
                                    project={project}
                                    index={index}
                                />
                            ))}
                        </motion.section>
                    )}

                    {/* Spacer for fixed footer */}
                    <div className="h-16" />
                </div>
            </div>

            {/* Console-style Footer */}
            <ConsoleFooter
                projectCount={projects.length}
                filteredCount={filteredProjects.length}
            />
        </main>
    );
}

