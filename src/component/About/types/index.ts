import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IHtmlTags {
  op: string;
  ct: string;
  className?: string;
  children: React.ReactNode;
}

export type Tab = {
  id: number;
  name: string;
  title: string;
  icon: IconProp;
  href: string;
  Component: () => React.JSX.Element;
};

export interface IAboutNav {
  selectedTab?: Tab;
  tabs: TabMap;
}

export interface TabMap {
  [key: string]: Tab;
}
