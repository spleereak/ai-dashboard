import React from "react";

interface Props {
  icon: any;
  value: number;
  label: string;
}

export const StatCard: React.FC<Props> = ({ icon, value, label }) => {
  return (
    <div className='bg-white border border-gray-200 rounded-md p-6 flex items-center'>
      {icon}
      <div className='ml-6'>
        <div className='text-4xl font-semibold mb-1'>{value}</div>
        <div className='text-gray-600'>{label}</div>
      </div>
    </div>
  )
}