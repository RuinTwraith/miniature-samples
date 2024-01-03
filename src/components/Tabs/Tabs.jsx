import React, { useState } from 'react';

export default function Accordion(props) {
  const { tabs, selectedTab, setSelectedTab, children } = props;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="w-full">
      <div className="flex gap-1">
        {tabs.map((item) => (
          <div
            key={item.value}
            className={`border p-1 px-2 cursor-pointer rounded-md ${
              selectedTab === item.value && 'bg-red-500 text-white'
            }`}
            onClick={() => setSelectedTab(item.value)}
          >
            {item.name}
          </div>
        ))}
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
