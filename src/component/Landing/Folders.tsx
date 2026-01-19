import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const folders = [
  { id: "1", name: "About", link: "/about" },
  { id: "2", name: "Certifications", link: "/about?tab=certifications" },
  { id: "3", name: "Contact", link: "/about?tab=profile" },
  { id: "4", name: "Projects", link: "/projects" },
  { id: "5", name: "Skills", link: "/about?tab=skills" },
];

export default function Folders({ className }: { className: string }) {
  return (
    <div className={`grid grid-cols-3 xs:grid-cols-5 lg:grid-cols-1 gap-1 xs:gap-2 lg:gap-4 xl:gap-6 ${className}`}>
      {folders.map((folder, index) => (
        <motion.div
          key={folder.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
        >
          <Link href={folder.link}>
            <div className="group relative flex flex-col items-center p-2 xs:p-3 rounded-lg transition-all duration-200 hover:bg-blue200/10 active:bg-blue200/20 cursor-pointer">
              {/* Selection highlight border */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-blue200/40 transition-all duration-200" />

              {/* Windows Folder Icon */}
              <div className="relative mb-1.5 xs:mb-2">
                <FontAwesomeIcon
                  icon={faFolder}
                  className="text-3xl xs:text-4xl lg:text-5xl text-amber-400 drop-shadow-md group-hover:text-amber-300 transition-colors duration-200"
                />
              </div>

              {/* Label */}
              <span className="text-[10px] xs:text-xs text-center text-gray-300 group-hover:text-white leading-tight max-w-[70px] xs:max-w-[80px] truncate transition-colors duration-200">
                {folder.name}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
