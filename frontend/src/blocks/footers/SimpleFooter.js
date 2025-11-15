import React from 'react';

const SimpleFooter = ({ data = {} }) => {
  const {
    companyName = 'Your Company',
    copyright = '2024',
    links = ['Privacy', 'Terms', 'Contact']
  } = data;

  return (
    <div className="w-full h-32 bg-gradient-to-r from-gray-700 to-gray-900 flex items-center justify-center px-8">
      <div className="max-w-6xl w-full flex items-center justify-between">
        <div className="text-white">
          <div className="font-bold text-xl mb-1">{companyName}</div>
          <div className="text-gray-400 text-sm">© {copyright} All rights reserved.</div>
        </div>
        <div className="flex gap-6">
          {links.map((link, index) => (
            <a key={index} href="#" className="text-gray-300 hover:text-white transition-colors font-medium">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimpleFooter;
