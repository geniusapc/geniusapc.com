/* eslint-disable @next/next/no-img-element */
import TopBorder from '@/component/Border/TopBorder';
import { IProject } from '../enum';
import { useState } from 'react';
import { CardFooter } from './projectCardFooter';




export const Project = ({ project }: { project: IProject }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <div className="bg-gray100 shadow-md rounded-xl overflow-hidden  border border-gray500  flex flex-col max-w-md ">
            <TopBorder />
            <img src={project.image} alt="AI-Powered Chatbot" className="w-full h-48 object-cover" />
            <div className="p-4 text-white200 ">
                <h3 className="text-2xl font-semibold  mb-2 ">{project.title}</h3>

                <div
                    className={` ${!isVisible &&
                        'line-clamp-5 overflow-hidden relative bg-clip-text text-transparent bg-gradient-to-b from-white200 to-transparent'
                        }`}
                >
                    <p>{project.description}</p>

                    <ul className="mt-3 text-sm  list-disc list-inside">
                        {project?.features?.map((feature: string) => (
                            <li className='mb-2' key={feature}>{feature}</li>
                        ))}
                    </ul>

                    <div className="mt-4 text-sm flex gap-2 ">
                        Technologies: <span>{project.technologies}</span>
                    </div>
                </div>
            </div>
            <CardFooter project={project} isVisible={isVisible} toggleVisibility={toggleVisibility} />
        </div>
    );
};
