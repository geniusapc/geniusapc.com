import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "./types";
import { usePathname, useRouter } from "next/navigation";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const NavTabitem = ({ tab, selectedTab }: { tab: Tab; selectedTab?: Tab }) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleoOnClick = (searchParams: string) => {
    const url = `${pathname}?tab=${searchParams}`;
    router.push(url);
  };

  const isSelected = tab.name === selectedTab?.name;

  // Get icon color based on file type
  const getIconColor = (title: string) => {
    if (title.endsWith('.html')) return 'text-orange-500';
    if (title.endsWith('.tsx') || title.endsWith('.ts')) return 'text-blue-400';
    if (title.endsWith('.md')) return 'text-blue-300';
    return 'text-gray-400';
  };

  return (
    <div
      onClick={() => handleoOnClick(tab?.tab)}
      key={tab.id}
      className={`group flex items-center gap-1 xs:gap-2 h-full px-2 xs:px-3 md:px-4 border-r-[1px] border-gray300 cursor-pointer transition-all duration-200
        ${isSelected
          ? 'bg-gray100 border-t-2 border-t-blue200 border-b-0'
          : 'bg-gray200 border-b-[1px] text-gray400 hover:bg-gray100/50'
        }`}
    >
      <FontAwesomeIcon
        icon={tab.icon}
        className={`text-xs xs:text-sm ${getIconColor(tab.title)}`}
      />
      <span className={`text-xs xs:text-sm font-mono truncate max-w-[60px] xs:max-w-[80px] sm:max-w-none ${isSelected ? 'text-white' : 'text-gray-400'}`}>
        {tab.title}
      </span>
      {isSelected && (
        <FontAwesomeIcon
          icon={faTimes}
          className="hidden sm:block text-xs text-gray-500 hover:text-white ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      )}
    </div>
  );
};

export default NavTabitem;
