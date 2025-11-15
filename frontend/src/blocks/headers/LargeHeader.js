import React from 'react';

const LargeHeader = ({ data = {} }) => {
  const { title = 'Large Header', subtitle = 'A more spacious header with room for content' } = data;

  return (
    <div className="w-full h-48 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 flex items-center justify-center px-8">
      <div className="text-center text-white max-w-2xl">
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="text-lg text-blue-100">{subtitle}</p>
      </div>
    </div>
  );
};

export default LargeHeader;
