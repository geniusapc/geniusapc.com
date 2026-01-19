'use client';
import { IHtmlTags } from "./types";
import { motion } from 'framer-motion';

const HtmlTag = ({ op, ct, className, children, lineStart = 1 }: IHtmlTags & { lineStart?: number }) => {
  return (
    <motion.div
      className={`text-gray400 ml-1 md:ml-4 my-2 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex">
        <span className="text-gray-600 text-xs w-6 md:w-8 text-right pr-2 md:pr-4 select-none font-mono border-r border-gray300 mr-3">
          {lineStart}
        </span>
        <span className="html-tags text-orange-400" aria-hidden="true" data-nosnippet>{op}</span>
      </div>

      <div className="flex">
        <span className="text-gray-600 text-xs w-6 md:w-8 text-right pr-2 md:pr-4 select-none font-mono border-r border-gray300 mr-3">
          {lineStart + 1}
        </span>
        <span className="text-gray-300 html-content pl-2 md:pl-6 leading-relaxed">{children}</span>
      </div>

      <div className="flex">
        <span className="text-gray-600 text-xs w-6 md:w-8 text-right pr-2 md:pr-4 select-none font-mono border-r border-gray300 mr-3">
          {lineStart + 2}
        </span>
        <span className="html-tags text-orange-400" aria-hidden="true" data-nosnippet>{ct}</span>
      </div>
    </motion.div>
  );
};
export default HtmlTag;
