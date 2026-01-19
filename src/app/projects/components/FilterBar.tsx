'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';

interface FilterBarProps {
    view: 'grid' | 'list';
     // eslint-disable-next-line no-unused-vars
    setView: (v: 'grid' | 'list') => void;
}

const FilterBar = ({ view, setView }: FilterBarProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4 sm:mb-6 flex items-center justify-end gap-2"
        >
            {/* View label */}
            <span className="text-xs text-gray-500 font-mono mr-1">
                view:
            </span>

            {/* View toggles */}
            <button
                onClick={() => setView('grid')}
                className={`p-1.5 xs:p-2 rounded transition-all duration-200 ${view === 'grid'
                    ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                    : 'bg-[#21262d] text-gray-400 border border-[#30363d] hover:border-gray-500 hover:text-gray-300'
                    }`}
                title="Grid View"
            >
                <FontAwesomeIcon icon={faLayerGroup} className="text-sm xs:text-base" />
            </button>
            <button
                onClick={() => setView('list')}
                className={`p-1.5 xs:p-2 rounded transition-all duration-200 ${view === 'list'
                    ? 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/50 shadow-[0_0_10px_rgba(34,211,238,0.2)]'
                    : 'bg-[#21262d] text-gray-400 border border-[#30363d] hover:border-gray-500 hover:text-gray-300'
                    }`}
                title="List View"
            >
                <FontAwesomeIcon icon={faCode} className="text-sm xs:text-base" />
            </button>
        </motion.div>
    );
};

export default FilterBar;
