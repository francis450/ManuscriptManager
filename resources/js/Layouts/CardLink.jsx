import { Book } from '@/Svgs/Svgs';
import React from 'react';

function CardLink( { children, href, title, deadline, creation_date }) {
  // determine the color theme for the icon based on the deadline date
  const iconColorTheme = new Date(deadline) > new Date() ? 'text-green-500' : 'text-red-500';
  console.log('iconColorTheme: ',iconColorTheme);

  return (
    <a href={href} className="scale-100 flex justify-between p-6 mb-4 shadow-2xl  bg-white light:bg-gray-800/50 light:bg-gradient-to-bl from-gray-700/50 via-transparent light:ring-1 light:ring-inset light:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 light:shadow-none flex motion-safe:hover:scale-[1.05] transition-all duration-250 hover:outline hover:outline-1 hover:outline-red-200 focus:outline focus:outline-2 focus:outline-red-500">
      <div>
        <h2 className="mt-6 text-l font-semibold text-gray-900 light:text-white">{title}</h2>
        <p className="mt-4 text-gray-500 light:text-gray-400 text-sm leading-relaxed">{creation_date}</p>
        <p className="mt-4 text-gray-500 light:text-gray-400 text-sm leading-relaxed">{deadline}</p>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
      </svg>
    </a>
  );
}

export default CardLink;
