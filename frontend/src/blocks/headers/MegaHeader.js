import React from 'react';

const MegaHeader = ({ data = {} }) => {
  const { title = 'Mega Header', subtitle = 'An impressive header section' } = data;

  return (
    <div className="w-full h-64 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center px-8">
      <div className="text-center text-white max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-blue-100 mb-4">{subtitle}</p>
        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default MegaHeader;
