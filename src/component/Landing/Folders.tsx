import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

export default function Folders({ className }: { className: string }) {
  return (
    <div className={`grid grid-cols-3 md:grid-cols-1 gap-8  ${className} px-2`}>
      {folders.map((e) => (
        <Link href={e.link} key={e.id} id={e.id}>
          <div className="flex flex-col items-center space-y-4  transition-all duration-300 hover:scale-110">
            <FontAwesomeIcon
              className="text-amber-400 "
              transform={{ rotate: 270 }}
              flip="horizontal"
              icon={faFolderOpen}
            />
            <span className="font-semibold">{e.name}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

const folders = [
  { id: "1", name: "About", link: "/about" },
  { id: "2", name: "Certification", link: "/about?tab=certifications" },
  { id: "3", name: "Contact", link: "/about?tab=profile" },
  { id: "4", name: "Projects", link: "/projects" },
  { id: "5", name: "Skills", link: "/about?tab=skills" },
];
