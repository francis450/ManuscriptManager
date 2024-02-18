import React from 'react';
import Tab from './Tab';

const TabHeader = ({ tabs, activeTab, setActiveTab, icons }) => {
  return (
    <div className="flex items-center bg-white-200">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          isActive={index === activeTab}
          onClick={() => setActiveTab(index)}
          icon={icons[index]} 
        />
      ))}
    </div>
  );
};

export default TabHeader;
