import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

export const SkillEnumComponent = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <motion.div
      className='mb-4 xs:mb-6 md:mb-10 font-mono'
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-1 xs:gap-2 mb-2 text-xs xs:text-sm">
        <span className="text-purple-400">export</span>
        <span className="text-blue200">enum</span>
        <span className="text-green-400">{title}</span>
        <span className="text-yellow-500">{'{'}</span>
      </div>
      <div className="border-l-2 border-gray300 ml-1 xs:ml-2 pl-2 xs:pl-4">
        {children}
      </div>
      <div className="text-yellow-500 text-xs xs:text-sm">{'}'}</div>
    </motion.div>
  );
};


export const SkillEnumMember = ({ list }: { list: string[] }) => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1.5 xs:gap-2 py-2">
      {list.map((item: string, index) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.03 }}
          className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-default text-xs xs:text-sm"
        >
          {item}{index < list.length - 1 && <span className="text-gray-500">,</span>}
        </motion.span>
      ))}
    </div>
  );
};


