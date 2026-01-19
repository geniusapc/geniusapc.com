'use client';
import React from "react";
import { about } from "@/resources";
import { motion } from 'framer-motion';

const LineNumber = ({ num }: { num: number }) => (
    <span className="text-gray-600 text-[10px] xs:text-xs w-5 xs:w-6 md:w-8 text-right pr-1 xs:pr-2 md:pr-4 select-none font-mono border-r border-gray300 mr-1.5 xs:mr-3 shrink-0">
        {num}
    </span>
);

const HtmlLine = ({ tag, children, line, isClosing = false, indent = 0 }: {
    tag: string;
    children?: React.ReactNode;
    line: number;
    isClosing?: boolean;
    indent?: number;
}) => (
    <motion.div
        className="flex items-start text-xs xs:text-sm"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: line * 0.02, duration: 0.3 }}
    >
        <LineNumber num={line} />
        <div style={{ paddingLeft: `${indent * 4}px` }}>
            <span className="text-orange-400">&lt;</span>
            <span className="text-pink-400">{isClosing ? '/' : ''}{tag}</span>
            <span className="text-orange-400">&gt;</span>
            {children && <span className="text-gray-300 ml-1">{children}</span>}
        </div>
    </motion.div>
);

const ContentLine = ({ children, line, indent = 1 }: { children: React.ReactNode; line: number; indent?: number }) => (
    <motion.div
        className="flex items-start my-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: line * 0.02, duration: 0.3 }}
    >
        <LineNumber num={line} />
        <p className="text-gray-300 leading-relaxed text-xs xs:text-sm" style={{ paddingLeft: `${indent * 4}px` }}>
            {children}
        </p>
    </motion.div>
);

function AboutTags() {
    const getYearsOfExperience = (startYear: number = 2020) => {
        const currentYear = new Date().getFullYear();
        return currentYear - startYear;
    };

    return (
        <div className="font-mono text-xs xs:text-sm">
            {/* DOCTYPE and document structure */}
            <motion.div
                className="flex items-center text-gray-500 mb-2 xs:mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                <LineNumber num={1} />
                <span>&lt;!DOCTYPE html&gt;</span>
            </motion.div>

            <HtmlLine tag="html" line={2} indent={0} />
            <HtmlLine tag="body" line={3} indent={1} />
            <HtmlLine tag="article" line={4} indent={2}>
                <span className="text-blue-400 ml-2">class</span>=<span className="text-green-400">&quot;about-me&quot;</span>
            </HtmlLine>

            {/* Title */}
            <HtmlLine tag="h1" line={5} indent={3}>
                <span className="text-white font-semibold text-base">About</span>
            </HtmlLine>
            <HtmlLine tag="h1" line={6} indent={3} isClosing />

            {/* First paragraph */}
            <HtmlLine tag="p" line={7} indent={3} />
            <ContentLine line={8} indent={4}>
                I&apos;m <span className="text-cyan-400">{about.name}</span>, a <span className="text-yellow-400">{about.role}</span> with
                <span className="text-green-400"> {getYearsOfExperience()} years</span> of experience
                specializing in both backend and frontend technologies. On the backend,
                I have a strong command of <span className="text-blue-400">Node.js</span> and <span className="text-blue-400">Nest.js</span>, enabling me to build
                efficient and scalable server-side applications.
            </ContentLine>
            <HtmlLine tag="p" line={9} indent={3} isClosing />

            {/* Second paragraph */}
            <HtmlLine tag="p" line={10} indent={3} />
            <ContentLine line={11} indent={4}>
                With expertise in RESTful APIs, database management, and server-side architecture, I
                ensure the backend of your web applications is robust and performs
                optimally. I take pride in writing <span className="text-green-400">clean</span> and <span className="text-green-400">maintainable</span> code, adhering
                to industry best practices.
            </ContentLine>
            <HtmlLine tag="p" line={12} indent={3} isClosing />

            {/* Third paragraph */}
            <HtmlLine tag="p" line={13} indent={3} />
            <ContentLine line={14} indent={4}>
                On the frontend, my skills revolve around <span className="text-blue-400">React</span> and <span className="text-blue-400">Next.js</span>, allowing me
                to create immersive and responsive user interfaces. I have a keen eye
                for UI/UX design principles and strive to deliver seamless user
                experiences.
            </ContentLine>
            <HtmlLine tag="p" line={15} indent={3} isClosing />

            {/* Fourth paragraph */}
            <HtmlLine tag="p" line={16} indent={3} />
            <ContentLine line={17} indent={4}>
                With my versatile skill set in both backend and frontend technologies, I
                offer a <span className="text-purple-400">holistic approach</span> to web development. Whether
                it&apos;s working on large-scale projects or small-scale applications, I
                am dedicated to delivering high-quality results.
            </ContentLine>
            <HtmlLine tag="p" line={18} indent={3} isClosing />

            {/* Closing tags */}
            <HtmlLine tag="article" line={19} indent={2} isClosing />
            <HtmlLine tag="body" line={20} indent={1} isClosing />
            <HtmlLine tag="html" line={21} indent={0} isClosing />
        </div>
    );
}

export default AboutTags;
