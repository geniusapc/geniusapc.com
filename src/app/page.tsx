'use client';
import React from 'react';
import Terminal from '../component/Landing/Terminal';
import Folders from '../component/Landing/Folders';
import { motion } from 'framer-motion';

export default function Page() {
  return (
    <main
      className="relative h-full overflow-y-auto lg:overflow-hidden select-none"
      id="home"
    >
      {/* Scanline overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]">
        <div className="h-full w-full bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />
      </div>

      {/* Dot grid background */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-20">
        <div className="h-full w-full bg-[radial-gradient(circle,#539bf5_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Ambient glow effects */}
      <div className="pointer-events-none fixed top-1/4 -left-32 w-64 h-64 bg-blue-500/8 rounded-full blur-[100px]" />
      <div className="pointer-events-none fixed bottom-1/4 -right-32 w-80 h-80 bg-purple-500/8 rounded-full blur-[100px]" />
      <div className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue200/3 rounded-full blur-[150px]" />

      {/* ============ MOBILE LAYOUT ============ */}
      <div className="flex flex-col items-center justify-center gap-6 xs:gap-8 p-4 xs:p-6 lg:hidden min-h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10"
        >
          <Folders className="" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="relative z-10 w-full max-w-[500px]"
        >
          <Terminal className="" />
        </motion.div>
      </div>

      {/* ============ DESKTOP LAYOUT ============ */}
      <div className="hidden lg:flex h-full w-full items-center justify-between px-8 xl:px-16">
        {/* Folders - Left side, vertical stack */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative z-10"
        >
          <Folders className="" />
        </motion.div>

        {/* Terminal - Right side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
          className="relative z-10"
        >
          <Terminal className="w-[520px] xl:w-[580px]" />
        </motion.div>
      </div>
    </main>
  );
}