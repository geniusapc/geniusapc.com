'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faIdCard,
  faBriefcase,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { about } from '../../resources';
import { SocialLink } from './SocialLinks';

const NAV_LINKS = [
  { id: 'home', icon: faHome, name: 'Home', href: '/' },
  { id: 'about', icon: faIdCard, name: 'About', href: '/about' },
  { id: 'projects', icon: faBriefcase, name: 'Projects', href: '/projects' },
];

const SideBar: React.FC = () => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');
  const { linkedIn, github, twitter } = about.socailLinks;

  useEffect(() => {
    const main = document.querySelector('main');
    if (main?.id) {
      setActiveSection(main.id);
    }
  }, [pathname]);

  return (
    <aside className="fixed bottom-0 z-50 w-full h-16 bg-gray200 text-white200 shadow-2xl md:h-screen md:w-20 md:flex md:flex-col md:items-center md:justify-between md:py-6">


      <div className=' flex md:flex-col md:space-y-12 h-full w-full '>

        {/* Top Logo + Divider */}
        <div className="hidden md:flex flex-col items-center space-y-4">

          <div className="relative">
            <FontAwesomeIcon
              icon={faCode}
              className="w-7 h-7 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
            />
            <div className="absolute inset-0 animate-ping rounded-full bg-blue-500 opacity-20" />
          </div>

          <div className="w-8 h-px bg-gray500" />
        </div>

        {/* Navigation Icons */}
        <nav className="flex w-full justify-around items-center md:flex-col md:items-center md:space-y-12">
          {NAV_LINKS.map(({ id, icon, name, href }) => (
            <Link
              key={id}
              href={href}
              className="group flex flex-col items-center justify-center gap-1 transition-all duration-300"
              aria-label={name}
            >
              <FontAwesomeIcon
                icon={icon}
                size="lg"
                className={`text-xl transition-colors duration-300 group-hover:text-blue200 ${activeSection === id ? 'text-blue200' : ''
                  }`}
              />
              <span className="text-xs font-semibold hidden md:block group-hover:text-blue200">
                {name}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Social Icons */}
      <section className="hidden md:flex flex-col items-center space-y-5">
        <SocialLink href={linkedIn.link} icon={faLinkedin} label="LinkedIn" />
        <SocialLink href={github.link} icon={faGithub} label="GitHub" />
        <SocialLink href={twitter.link} icon={faTwitter} label="Twitter" />
      </section>
    </aside>
  );
};



export default SideBar;
