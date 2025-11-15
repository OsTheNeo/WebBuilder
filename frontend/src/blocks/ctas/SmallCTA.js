import React from 'react';

const SmallCTA = ({ data = {} }) => {
  const {
    title = 'Ready to get started?',
    ctaText = 'Sign Up Now'
  } = data;

  return (
    <div className="w-full h-32 bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center px-8">
      <div className="flex items-center gap-6">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-red-50 transition-all transform hover:scale-105 shadow-lg">
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default SmallCTA;
