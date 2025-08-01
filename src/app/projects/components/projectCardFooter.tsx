import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { IProject } from '../enum';

export const CardFooter = ({
    project,
    toggleVisibility,
    isVisible,
}: {
    project: IProject;
    toggleVisibility: () => void;
    isVisible: boolean;
}): JSX.Element => {
    return (
        <div className="mt-auto p-4 flex space-x-4  justify-between ">
            <div className="flex space-x-4 content-center align-middle justify-items-center ">
                <a
                    href={project.github}
                    className={`text-blue200 hover:text-blue300 h-6 my-auto ${!project.github && ' cursor-not-allowed'
                        }`}
                    target={project.github ? '_blank' : '_self'}
                    title={project.github ? 'View GitHub Repository' : 'Repository is private'}
                >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>

                <a
                    href={project.site ? project.site : '#'}
                    className={`text-pink-400 hover:text-pink-800 h-6 my-auto 
                         ${!project.site && ' cursor-not-allowed'}`}
                    target={project.site ? '_blank' : '_self'}
                    title={project.site ? 'Visit Project Site' : 'Project site unavailable'}
                    aria-disabled={!project.site}
                >
                    <FontAwesomeIcon icon={faLink} size="lg" />
                </a>
            </div>

            <button
                onClick={toggleVisibility}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-400 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
                {isVisible ? 'Show Less' : 'Show More'}

                <FontAwesomeIcon
                    className="cursor-pointer"
                    icon={isVisible ? faChevronUp : faChevronDown}
                />
            </button>
        </div>
    );
};