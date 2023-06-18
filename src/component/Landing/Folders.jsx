import React from 'react'
import Link from "next/link";
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const folders = [
    { id: 1, name: "About", tagId: "technology-folder", link: "#About" },
    { id: 2, name: "Contact", tagId: "Contact-folder", link: "#contact" },
    { id: 3, name: "Projects", tagId: "Projects-folder", link: "#projects" },
    {
        id: 4,
        name: "Certification",
        tagId: "certification-folder",
        link: "#certifications",
    },
    { id: 5, name: "Skills", tagId: "technology-folder", link: "#skills" },
];

function Folders({ className }) {
    return (
        <div className={`grid grid-cols-3 md:grid-cols-1 gap-8  ${className} `}>
            {folders.map((e) => (
                <Link href={e.link} key={e.id} id={e.tagId}>
                    <div className='flex flex-col items-center space-y-2 '>
                        <FontAwesomeIcon
                            className="text-amber-400"
                            transform={{ rotate: 270 }}
                            flip="horizontal"
                            icon={faFolderOpen}
                        />
                        <span className="folderName">{e.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Folders;

const FolderContainer = styled.div`
      color:#fec02f;
      font-size: 1.2em;
      cursor: pointer;
      margin-bottom: 7px;
      animation: fadeOut 3s ease-in;
      transition: all 0.4s ease-in-out;
      display:flex;
      flex-direction:column;
      gap:10px;
      align-items:center;
      span{
        color:var(--secondary-color);
      }
      &:hover {
        transform: scale(1.2);
      }
`


