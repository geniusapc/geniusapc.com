import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tab } from "./types";
import { usePathname, useRouter } from "next/navigation";

const NavTabitem = ({ tab, selectedTab }: { tab: Tab; selectedTab?: Tab }) => {
  const pathname = usePathname();
  const router = useRouter();
  const handleoOnClick = (searchParams: string) => {
    const url = `${pathname}?tab=${searchParams}`;
    router.push(url);
  };
  const selectedClass =
    tab.name === selectedTab?.name
      ? " bg-gray100 z-50 border-b-0 border-t-[1px] border-t-blue200 "
      : "bg-gray200 border-b-[1px]  text-gray400";
  return (
    <div
      onClick={() => handleoOnClick(tab?.tab)}
      key={tab.id}
      className={` flex items-center space-x-2 h-full px-4 border-r-[1px] border-gray300  cursor-pointer ${selectedClass}`}
    >
      <FontAwesomeIcon icon={tab.icon} />
      <span>{tab.title}</span>
    </div>
  );
};

export default NavTabitem;
