import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IHtmlTags {
  op: string;
  ct: string;
  className?: string;
  children: React.ReactNode;
}

export type Tab = {
  id: string;
  name: string;
  title: string;
  icon: IconProp;
  tab: string;
  Component: () => React.JSX.Element;
  isMobileOnly?:boolean
};

export interface IAboutNav {
  selectedTab?: Tab;
  tabs: TabMap;
}

export interface TabMap {
  [key: string]: Tab;

}
