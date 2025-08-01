import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type Props = {
    text: string;
    icon?: IconDefinition;
    className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const DefaultBtn = ({ text, icon, className, ...rest }: Props) => (
    <button
        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${className}`}
        {...rest}
    >
        {icon && <FontAwesomeIcon icon={icon} />}
        {text}
    </button>
);

export default DefaultBtn;
