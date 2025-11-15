import React from 'react';

const TallHeader = ({ data = {} }) => {
  const { title = 'Tall Header', subtitle = 'Extra height for maximum impact' } = data;

  return (
    <div className="w-full h-80 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 flex items-center justify-center px-8">
      <div className="text-center text-white max-w-4xl">
        <h1 className="text-6xl font-bold mb-6">{title}</h1>
        <p className="text-2xl text-blue-200 mb-8">{subtitle}</p>
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-blue-50 transition">
            Primary Action
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
            Secondary
          </button>
        </div>
      </div>
    </div>
  );
};

export default TallHeader;
