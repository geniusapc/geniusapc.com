'use client';
import React from 'react';
import { Project } from './components/projectCard';
import { projects } from './data';

export default function Page() {
    return (
        <main className="overflow-scroll h-full w-full">
            <section className="grid gap-8  w-full sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 md:p-4 md:m-2 justify-center ">
                {projects.map((project) => <Project project={project} key={project.title} />)}
            </section>
        </main >
    );
}


