import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialLink = ({
    href,
    icon,
    label,
}: {
    href: string;
    icon: any;
    label: string;
}) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-white200 transition-all duration-300 hover:scale-110 hover:text-blue200"
    >
        <FontAwesomeIcon icon={icon} />
    </a>
);