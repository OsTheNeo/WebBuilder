import React from 'react';

const StandardHero = ({ data = {} }) => {
  const {
    title = 'Build the Future',
    subtitle = 'Create stunning websites with our powerful platform',
    ctaText = 'Start Building',
    secondaryCtaText = 'Learn More'
  } = data;

  return (
    <div className="w-full h-48 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 flex items-center justify-center px-12">
      <div className="text-center text-white max-w-3xl">
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="text-purple-100 text-lg mb-6">{subtitle}</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
            {ctaText}
          </button>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-800 transition-colors">
            {secondaryCtaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StandardHero;
