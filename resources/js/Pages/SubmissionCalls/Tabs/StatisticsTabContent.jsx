import React from 'react';

const StatisticsTabContent = ({ submissions }) => {
    console.log("SUbmissions on statistics tab: ",submissions); 
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Statistics</h2>
      <ul>
        {/* {submissions.map((submission, index) => (
          <li key={index}>{submission}</li>
        ))} */}
      </ul>
    </div>
  );
};

export default StatisticsTabContent;
