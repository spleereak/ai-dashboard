import React from "react";
import {Grid, ImageIcon, Layers, User} from "lucide-react";
import {NavItem} from "@/components/NavItem.tsx";

export const Sidebar: React.FC = () => {
  return (
    <div className='w-60 bg-black text-white flex flex-col h-full'>
      <div className='p-6 flex items-center'>
        <ImageIcon className='mr-2' />
        <h1 className='text-xl font-bold'>AI Dashboard</h1>
      </div>

      <nav className='flex-1'>
        <NavItem icon={<Grid />} label="Dashboard" active />
        <NavItem icon={<Layers />} label="Генератор изображения" />
        <NavItem icon={<ImageIcon />} label="Галерея" />
        <NavItem icon={<User />} label="Мой аккаунт" />
      </nav>
    </div>
  )
}