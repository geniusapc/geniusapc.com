import React, { ReactNode } from 'react';

export const SkillEnumComponent = ({ children, title }: { children: ReactNode; title: string }) => {
  return (
    <div>
      <span className="text-blue200 pr-2"> enum</span>
      <span className="text-green-600 pr-2"> {title} </span>
      <span className="text-yellow-700"> {'{'} </span>
      {children}
      <div className="text-yellow-700 block">{'}'}</div>
    </div>

  );
};


export const SkillEnumMember = ({ list }: { list: string[] }) => {
  return (
    <div className="pl-4 grid  grid-cols-2 md:grid-cols-4 gap-1">
      {list.map((item: string, index) => (
        <span key={item}>
          {item} {index < list.length - 1 && ','}
        </span>
      ))}
    </div>
  );
};


