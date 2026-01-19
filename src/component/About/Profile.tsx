'use client';

import Image from 'next/image';
import { faEnvelope, faTerminal } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import DefaultBtn from '../Buttons/DefaultButton';
import { about } from '@/resources';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

const Profile = () => {
    const { linkedIn, twitter } = about.socailLinks;

    const goToExternalLink = (url: string, target = '_blank') =>
        window.open(url, target);

    return (
        <div className="h-full p-2 xs:p-4 gap-4 xs:gap-6 flex flex-col items-center justify-center">
            {/* Profile Image with code-style border */}
            <motion.div
                className="relative group"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue200 via-purple-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative">
                    <Image
                        src="/img/profile.jpg"
                        className="rounded-2xl shadow-xl transition-transform group-hover:scale-[1.02] duration-300 border-2 border-gray300 w-[150px] h-[150px] xs:w-[180px] xs:h-[180px] md:w-[200px] md:h-[200px] object-cover"
                        alt="Prince Arthur"
                        width={200}
                        height={200}
                    />
                </div>
            </motion.div>

            {/* Terminal-style info card */}
            <motion.div
                className="bg-gray200 border border-gray300 rounded-lg p-3 xs:p-4 w-full max-w-[280px] xs:max-w-xs font-mono text-xs xs:text-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
            >
                <div className="flex items-center gap-2 mb-2 xs:mb-3 text-gray-500 border-b border-gray300 pb-2">
                    <FontAwesomeIcon icon={faTerminal} className="text-green-400 w-3 h-3 xs:w-4 xs:h-4" />
                    <span>~/whoami</span>
                </div>
                <div className="space-y-1">
                    <div className="truncate">
                        <span className="text-blue200">name</span>
                        <span className="text-gray-500">: </span>
                        <span className="text-green-400">&quot;{about.name}&quot;</span>
                    </div>
                    <div className="truncate">
                        <span className="text-blue200">role</span>
                        <span className="text-gray-500">: </span>
                        <span className="text-yellow-400">&quot;{about.role}&quot;</span>
                    </div>
                    <div>
                        <span className="text-blue200">status</span>
                        <span className="text-gray-500">: </span>
                        <span className="text-green-400">&quot;Available&quot;</span>
                        <span className="inline-block w-1.5 h-1.5 xs:w-2 xs:h-2 bg-green-400 rounded-full ml-2 animate-pulse"></span>
                    </div>
                </div>
            </motion.div>

            {/* Tagline */}
            <p className="text-center text-gray-500 text-[10px] xs:text-xs px-2 xs:px-4 italic font-mono">
                {'//'} Crafting scalable solutions with precision
            </p>

            {/* Buttons */}
            <motion.div
                className="flex gap-1.5 xs:gap-2 flex-wrap justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
            >
                <DefaultBtn
                    icon={faLinkedin}
                    text="LinkedIn"
                    className="bg-blue-600 text-white hover:bg-blue-700 text-sm"
                    onClick={() => goToExternalLink(linkedIn.link)}
                />
                <DefaultBtn
                    icon={faTwitter}
                    text="Twitter"
                    className="bg-[#1DA1F2] text-white hover:bg-[#0d8ddb] text-sm"
                    onClick={() => goToExternalLink(twitter.link)}
                />
                <DefaultBtn
                    icon={faEnvelope}
                    text="Email"
                    className="bg-gray300 text-white hover:bg-gray-600 text-sm"
                    onClick={() => goToExternalLink(`mailto:${about.email}`, '_self')}
                />
            </motion.div>
        </div>
    );
};

export default Profile;
