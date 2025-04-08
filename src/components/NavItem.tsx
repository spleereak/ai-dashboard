import React from "react";

interface Props {
  icon: any;
  label: string;
  active?: boolean;
}

export const NavItem: React.FC<Props> = ({ icon, label, active }) => {
  return (
    <div className={`flex items-center px-6 py-3 cursor-pointer hover:bg-gray-900 transition-colors ${active ? 'bg-gray-900' : ''}`}>
      <div className='mr-3'>{icon}</div>
      <span>{label}</span>
    </div>
  )
}