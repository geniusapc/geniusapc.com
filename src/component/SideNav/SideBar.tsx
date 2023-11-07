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

export default function SideBar() {
  const { linkedIn, github, twitter } = about.socailLinks;

  return (
    <aside className="fixed z-50 bottom-0 h-16 md:h-screen bg-gray200 text-white200 w-full md:w-20 items-center flex flex-col justify-between  py-auto md:py-12 select-none">
      <div className="flex flex-row md:flex-col  justify-around md:justify-start  items-center  md:space-y-10 h-full w-full shadow-2xl">
        {links.map((e) => (
          <Link
            href={e.link}
            key={e.id}
            className="tooltip flex flex-col  justify-center gap-1 md:gap-2"
            data-tooltip={e.name}
          >
            <FontAwesomeIcon className="text-2xl md:text-3xl" icon={e.icon} />
            <span className="block font-semibold">{e.name}</span>
          </Link>
        ))}
      </div>
      <section className="hidden md:flex flex-col space-y-8  text-xl">
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
