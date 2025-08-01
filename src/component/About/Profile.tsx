'use client';

import Image from 'next/image';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import DefaultBtn from '../Buttons/DefaultButton';
import { about } from '@/resources';

const Profile = () => {
    const { linkedIn, twitter } = about.socailLinks;

    const goToExternalLink = (url: string, target = '_blank') =>
        window.open(url, target);

    return (
        <div className="h-full p-4 gap-8 flex flex-col items-center justify-center animate-fade-in-up">
            {/* Profile Image */}
            <div className="relative group  justify-center align center">
                <Image
                    src="/img/profile.jpg"
                    className="rounded-2xl shadow-xl transition-transform group-hover:scale-105 duration-300"
                    alt="Prince Arthur"
                    width={240}
                    height={240}
                />
                <figcaption className="text-center mt-4">
                    <p className="text-lg font-semibold text-gray-700">{about.name}</p>
                    <p className="text-sm italic text-gray-500">{about.role}</p>
                </figcaption>
            </div>

            {/* Tagline */}
            <p className="text-center text-gray-500 text-xs px-4 italic">
                Crafting scalable solutions with precision and purpose.
            </p>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap justify-center">
                <DefaultBtn
                    icon={faLinkedin}
                    text="LinkedIn"
                    className="bg-blue-600 text-white hover:bg-blue-700"
                    onClick={() => goToExternalLink(linkedIn.link)}
                />
                <DefaultBtn
                    icon={faTwitter}
                    text="Twitter"
                    className="bg-[#1DA1F2] text-white hover:bg-[#0d8ddb]"
                    onClick={() => goToExternalLink(twitter.link)}
                />
                <DefaultBtn
                    icon={faEnvelope}
                    text="Email"
                    className="bg-gray-300 text-gray-800 hover:bg-gray-400"
                    onClick={() => goToExternalLink(`mailto:${about.email}`, '_self')}
                />
            </div>
        </div>
    );
};

export default Profile;
