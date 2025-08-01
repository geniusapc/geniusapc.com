'use client';
import React from 'react';
import Terminal from '../component/Landing/Terminal';
import Folders from '../component/Landing/Folders';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <main
      className="flex flex-col md:flex-row h-full justify-start md:gap-24 md:justify-between overflow-y-auto md:overflow-hidden z-50 select-none"
      id="home"
    >
      {/* Folders Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className=""
      >
        <Folders className="h-full" />
      </motion.div>

      {/* Terminal Animation */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        className="invisible md:visible md:self-auto"
      >
        <Terminal className="" />
      </motion.div>
    </main>
  );
}