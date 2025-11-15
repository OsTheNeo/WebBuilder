import React from 'react';

const CompactHero = ({ data = {} }) => {
  const {
    title = 'Welcome to Our Platform',
    subtitle = 'Build amazing things',
    ctaText = 'Get Started'
  } = data;

  return (
    <div className="w-full h-32 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center px-8">
      <div className="text-center text-white">
        <h1 className="text-2xl font-bold mb-1">{title}</h1>
        <p className="text-purple-100 text-sm mb-2">{subtitle}</p>
        <button className="bg-white text-purple-600 px-4 py-1 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-sm">
          {ctaText}
        </button>
      </div>
    </div>
  );
};

export default CompactHero;
