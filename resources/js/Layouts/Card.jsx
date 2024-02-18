import React from 'react';

const Card = ({ title, content, avatar, footer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md mb-4">
      {/* Card header */}
      <div className="flex items-center p-4">
        {/* Avatar */}
        {avatar && (
          <img
            src={avatar}
            alt="Avatar"
            className="w-8 h-8 rounded-full mr-4"
          />
        )}
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      </div>

      {/* Card content */}
      <div className="p-4 text-gray-700">{content}</div>

      {/* Card footer */}
      {footer && (
        <div className="flex items-center justify-between p-4 text-gray-500">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
