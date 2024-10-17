import React, { useState } from 'react';

export const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-list flex items-center gap-3 mb-5 relative">
        {React.Children.map(children, (child, index) => {
          return (
            <div
              key={index}
              className={`flex items-center gap-1 cursor-pointer text-[14px] w-[180px] pb-3 ${
                index === activeTab ? 'text-purple-900' : 'text-gray-600'
              }`}
              onClick={() => handleTabClick(index)}
            >
              {child.props.icon && <div className="tab-icon">{child.props.icon}</div>}
              <div
                className={`tab-title text-sm font-extrabold ${
                  index === activeTab ? 'text-purple-900' : 'text-gray-600'
                }`}
              >
                {child.props.title}
              </div>
              {index === activeTab && (
                <div className="active-tab-line bg-purple-900 w-[80px] md:w-[125px] h-1.5 md:h-2 absolute bottom-0"></div>
              )}
            </div>
          );
        })}
        <div className="tabs-bottom-line bg-gray-500 h-[0.5px] absolute bottom-0 left-0 right-0"></div>
      </div>
      <div className="tab-content">
        {React.Children.map(children, (child, index) => {
          if (index === activeTab) {
            return child.props.children;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export const Tab = ({ children }) => {
  return <>{children}</>;
};

export const TabPanel = ({ children }) => {
  return <>{children}</>;
};
