import React from 'react'
import HtmlTag from './HtmlTag'
import { about } from "@/resources"

function AboutTags() {
    return (
        <HtmlTag op={"<article>"} ct={"</article>"} >
            <HtmlTag op={'<h1>'} ct={'</h1>'}>
                About
            </HtmlTag>

            <HtmlTag op={'<p>'} ct={'</p>'}>
                I'm {about.name}, a {about.role} with four years of experience specializing
                in both backend and frontend technologies. On the backend, I have a strong command of
                Node.js and Nest.js, enabling me to build efficient and scalable server-side
                applications. With expertise in RESTful APIs, database management, and server-side
                architecture, I ensure the backend of your web applications is robust and performs
                optimally. I take pride in writing clean and maintainable code, adhering to industry
                best practices to deliver reliable and high-performing backend solutions.
            </HtmlTag>

            <HtmlTag op={'<p>'} ct={'</p>'}>
                On the frontend, my skills revolve around React and Next.js, allowing me to create
                immersive and responsive user interfaces. I have a keen eye for UI/UX design
                principles and strive to deliver seamless user experiences. From developing complex
                user interfaces to implementing state management, I have the proficiency to bring your
                frontend visions to life. I keep up with the latest frontend and backend technologies
                to ensure the solutions I deliver are modern, efficient, and aligned with industry
                trends.
            </HtmlTag>
            <HtmlTag op={'<article>'} ct={'</article>'}>
                With my versatile skill set in both backend and frontend technologies, I offer a
                holistic approach to web development. I thrive in collaborative environments and
                possess excellent problem-solving abilities. Whether it's working on large-scale
                projects or small-scale applications, I am dedicated to delivering high-quality
                results. If you're looking for a skilled full-stack developer who can handle both
                backend and frontend aspects of your projects, I would be delighted to contribute my
                expertise and collaborate with you to create exceptional web applications.
            </HtmlTag>
        </HtmlTag>
    )
}

export default AboutTags