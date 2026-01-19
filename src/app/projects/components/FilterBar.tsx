'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFilter,
    faSearch,
    faCode,
    faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

interface FilterBarProps {
    view: 'grid' | 'list';
    setView: (v: 'grid' | 'list') => void;
    searchTerm: string;
    setSearchTerm: (t: string) => void;
}

const FilterBar = ({ view, setView, searchTerm, setSearchTerm }: FilterBarProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 sm:mb-6 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center justify-between"
        >
            {/* Search input - terminal style */}
            <div className="relative flex-1 w-full sm:max-w-md">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 sm:gap-2 text-gray-500">
                    <FontAwesomeIcon icon={faSearch} className="text-xs sm:text-sm" />
                    <span className="text-green-400 font-mono text-xs sm:text-sm hidden xs:inline">grep</span>
                </div>
                <input
                    type="text"
                    placeholder='"search..."'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-md pl-8 xs:pl-16 sm:pl-20 pr-3 sm:pr-4 py-2 text-xs sm:text-sm font-mono text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-colors"
                />
            </div>

            {/* View toggles */}
            <div className="flex items-center gap-2 justify-end">
                <span className="hidden sm:inline text-xs text-gray-500 font-mono mr-2">
                    <FontAwesomeIcon icon={faFilter} className="mr-1" />
                    view:
                </span>
                <button
                    onClick={() => setView('grid')}
                    className={`p-2 rounded transition-colors ${view === 'grid'
                        ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50'
                        : 'bg-[#21262d] text-gray-400 border border-[#30363d] hover:border-gray-500'
                        }`}
                    title="Grid View"
                >
                    <FontAwesomeIcon icon={faLayerGroup} />
                </button>
                <button
                    onClick={() => setView('list')}
                    className={`p-2 rounded transition-colors ${view === 'list'
                        ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50'
                        : 'bg-[#21262d] text-gray-400 border border-[#30363d] hover:border-gray-500'
                        }`}
                    title="List View"
                >
                    <FontAwesomeIcon icon={faCode} />
                </button>
            </div>
        </motion.div>
    );
};

export default FilterBar;
