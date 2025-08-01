'use client';
import React from 'react';
import { Project } from './components/projectCard';
import { projects } from './data';
import { motion } from 'framer-motion';

export default function Page() {
    return (
        <main className="overflow-y-auto h-full w-full p-4" id="projects">
            <section className="grid gap-8 w-full sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-center mb-12">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <Project project={project} />
                    </motion.div>
                ))}
            </section>
        </main>
    );
}

