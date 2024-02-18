import React from 'react';

const Tab = ({ title, isActive, onClick, icon }) => {
  return (
    <div
      className={`cursor-pointer inline-flex items-center gap-2 px-4 py-2 border-b-2 font-semibold ${
        isActive ? 'border-blue-500' : 'border-transparent'
      }`}
      onClick={onClick}
    >
      {icon}
      {title}
    </div>
  );
};

export default Tab;
