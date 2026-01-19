'use client';
import { certifications } from '@/resources';
import { faExternalLink, faAward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { motion } from 'framer-motion';


type CertItemProp = {
    title: string;
    link: string;
    target?: string;
    key: string;
    imgSrc?: string;
    index?: number;
};

export const CertItem = ({ title, link, imgSrc, target = '_blank', index = 0 }: CertItemProp) => {
    return (
        <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group flex flex-row text-xs xs:text-sm items-center gap-2 xs:gap-3 cursor-pointer border border-gray300 hover:border-blue200/50 bg-gray200/30 hover:bg-gray200/60 p-2 xs:p-3 rounded-lg transition-all duration-200"
            href={link}
            target={target}
        >
            {imgSrc ? (
                <Image alt={title} src={imgSrc} className="rounded-lg shrink-0" width={24} height={24} />
            ) : (
                <FontAwesomeIcon icon={faAward} className="text-yellow-500 w-4 h-4 xs:w-5 xs:h-5 shrink-0" />
            )}
            <span className="text-xs xs:text-sm text-gray-300 group-hover:text-white transition-colors flex-1 line-clamp-2">{title}</span>
            <FontAwesomeIcon icon={faExternalLink} className="text-blue200 text-xs opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </motion.a>
    );
};

export const CertOfCompletion = () => {
    const certs = certifications.minor;
    return (
        <div className="px-1 xs:px-2 py-2 xs:py-4 font-mono">
            {certs.map((item) => (
                <div key={item.provider} className="mb-6 xs:mb-8">
                    <div className="text-left mb-2 xs:mb-3 text-xs xs:text-sm flex items-center gap-1 xs:gap-2">
                        <span className="text-gray-500">{'>'}</span>
                        <span className="text-purple-400">provider</span>
                        <span className="text-gray-500">=</span>
                        <span className="text-green-400 truncate">&quot;{item.provider}&quot;</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xs:gap-3 pl-2 xs:pl-4 border-l-2 border-gray300">
                        {item.cert.map((cert, idx) => (
                            <CertItem key={cert.title} title={cert.title} link={cert.link} index={idx} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};
