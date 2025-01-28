import { certifications } from '@/resources';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';


type CertItemProp = {
    title: string;
    link: string;
    target?: string;
    key: string;
    imgSrc?: string;
};

export const CertItem = ({ title, link, imgSrc, target = '_blank' }: CertItemProp) => {
    return (
        <a
            className="flex flex-row  text-sm items-center gap-4 cursor-pointer border border-[#1F223C] p-4"
            href={link}
            target={target}
        >
            {imgSrc && <Image alt={title} src={imgSrc} className="rounded-2xl" width={30} height={30} />}
            <span className="text-sm">{title}</span>
            <FontAwesomeIcon icon={faExternalLink} className="text-blue200 ml-2  text-xs " />
        </a>
    );
};

export const CertOfCompletion = () => {
    const certs = certifications.minor;
    return (
        <div className=" px-2 py-4">
            {certs.map((item) => (
                <>
                    <div key={item.provider} className="text-blue200 text-left md:text-right mb-4 text-sm  ">
                        {item.provider}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {item.cert.map((item) => (
                            <CertItem key={item.title} title={item.title} link={item.link} />
                        ))}
                    </div>
                </>
            ))}
        </div>
    );
};
