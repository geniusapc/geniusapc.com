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
} from '@fortawesome/free-solid-svg-icons';
import { about } from '../../resources';
import { SocialLink } from './SocialLinks';
import { motion } from 'framer-motion';
import BrandLogo from '../BrandLogo';

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
    <aside className="fixed bottom-0 z-50 w-full h-14 xs:h-16 bg-gray200/95 backdrop-blur-md text-white200 shadow-2xl border-t border-gray300/50 md:h-screen md:w-16 lg:w-20 md:flex md:flex-col md:items-center md:justify-between md:py-4 lg:py-6 md:border-t-0 md:border-r md:border-gray300/50">
      <div className="flex md:flex-col md:gap-6 lg:gap-8 h-full w-full">

        {/* Logo Section - Desktop */}
        <div className="hidden md:flex flex-col items-center gap-3 lg:gap-4">
          <motion.div
            className="relative group rounded-xl"
            whileHover={{ scale: 1.04, y: -1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            {/* Logo glow */}
            <div className="absolute inset-1 rounded-xl bg-blue200/25 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-70" />

            <Link href="/" aria-label="GeniusAPC home" className="relative block rounded-xl focus-visible:ring-2 focus-visible:ring-blue200 focus-visible:ring-offset-2 focus-visible:ring-offset-gray200">
              <BrandLogo
                priority
                className="w-10 lg:w-12 shadow-[0_6px_16px_rgba(0,0,0,0.35)]"
              />
            </Link>
          </motion.div>

          <div className="w-8 lg:w-10 h-px bg-gradient-to-r from-transparent via-gray300 to-transparent" />
        </div>

        {/* Navigation - Taskbar Style */}
        <nav className="flex w-full justify-around items-center md:flex-col md:items-center md:gap-2 lg:gap-3">
          {NAV_LINKS.map(({ id, icon, name, href }) => {
            const isActive = activeSection === id;
            return (
              <Link
                key={id}
                href={href}
                className="group relative flex flex-col items-center justify-center p-2 xs:p-2.5 md:p-2 lg:p-3 rounded-lg transition-all duration-200"
                aria-label={name}
              >
                {/* Active/Hover background */}
                <div className={`absolute inset-0 rounded-lg transition-all duration-200 ${isActive
                    ? 'bg-blue200/15 border border-blue200/30'
                    : 'bg-transparent group-hover:bg-white/5'
                  }`} />

                {/* Active indicator line */}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 md:bottom-auto md:left-0 md:top-1/2 md:-translate-y-1/2 w-6 md:w-0.5 h-0.5 md:h-5 lg:h-6 bg-blue200 rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}

                {/* Icon */}
                <div className="relative z-10">
                  <FontAwesomeIcon
                    icon={icon}
                    className={`text-base xs:text-lg lg:text-xl transition-all duration-200 ${isActive
                        ? 'text-blue200 drop-shadow-[0_0_8px_rgba(83,155,245,0.5)]'
                        : 'text-gray-400 group-hover:text-white'
                      }`}
                  />
                </div>

                {/* Label */}
                <span className={`relative z-10 text-[9px] xs:text-[10px] lg:text-xs font-mono mt-0.5 lg:mt-1 transition-colors duration-200 ${isActive ? 'text-blue200' : 'text-gray-500 group-hover:text-gray-300'
                  }`}>
                  {name}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Social Links - Desktop */}
      <section className="hidden md:flex flex-col items-center gap-3 lg:gap-4">
        <div className="w-8 lg:w-10 h-px bg-gradient-to-r from-transparent via-gray300 to-transparent mb-1" />

        <SocialLink href={linkedIn.link} icon={faLinkedin} label="LinkedIn" />
        <SocialLink href={github.link} icon={faGithub} label="GitHub" />
        <SocialLink href={twitter.link} icon={faTwitter} label="Twitter" />

        {/* System tray style clock placeholder */}
        <div className="mt-2 lg:mt-3 text-[10px] lg:text-xs text-gray-500 font-mono text-center leading-tight">
          <div className="text-gray-400">v1.0</div>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
