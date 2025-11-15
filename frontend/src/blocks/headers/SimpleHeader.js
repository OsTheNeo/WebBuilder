import React from 'react';

const SimpleHeader = ({ data = {} }) => {
  const { title = 'Simple Header', subtitle = 'A clean and minimal header section' } = data;

  return (
    <div className="w-full h-32 bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center px-8">
      <div className="text-center text-white">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <p className="text-blue-100">{subtitle}</p>
      </div>
    </div>
  );
};

export default SimpleHeader;
