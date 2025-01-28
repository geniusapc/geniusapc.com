import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faIdCard,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import { about } from "../../resources";
import Image from "next/image";

export default function SideBar() {
  const { linkedIn, github, twitter } = about.socailLinks;

  return (

    <aside className="fixed z-50 bottom-0 h-16 md:h-screen bg-gray200 text-white200 w-full md:w-20 items-center flex flex-col justify-between  py-auto md:py-2 select-none">
      <div className=" hidden md:block">
        <Image src="/logo.png" width={60} height={60} alt="logo" />
        <div className="w-full h-[1px]  my-4 md:my-6"></div>

      </div>
      <div className="flex flex-row md:flex-col  justify-around md:justify-start  items-center  md:space-y-10 h-full w-full shadow-2xl">
        {links.map((e) => (
          <Link
            href={e.link}
            key={e.id}
            className="tooltip flex flex-col  justify-center gap-1 md:gap-2"
            data-tooltip={e.name}
          >
            <FontAwesomeIcon className="text-2xl" icon={e.icon} />
            <span className="block text-sm font-semibold">{e.name}</span>
          </Link>
        ))}
      </div>
      <section className="hidden md:flex flex-col space-y-4  text-lg">
        <a href={linkedIn.link} target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href={github.link} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={twitter.link} target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </section>
    </aside>
  );
}

const links = [
  {
    id: 1,
    icon: faHome,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    icon: faIdCard,
    name: "About",
    link: "/about",
  },

  {
    id: 3,
    icon: faBriefcase,
    name: "Projects",
    link: "/projects",
  },
];
