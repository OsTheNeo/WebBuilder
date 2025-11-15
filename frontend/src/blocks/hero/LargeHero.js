import React from 'react';

const LargeHero = ({ data = {} }) => {
  const {
    title = 'Transform Your Vision',
    subtitle = 'The complete solution for modern web development',
    description = 'Build, deploy, and scale your applications with confidence using our comprehensive platform.',
    ctaText = 'Get Started Free',
    secondaryCtaText = 'View Demo'
  } = data;

  return (
    <div className="w-full h-64 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 flex items-center justify-center px-16">
      <div className="text-center text-white max-w-4xl">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-purple-100 text-xl mb-3">{subtitle}</p>
        <p className="text-purple-200 text-base mb-8 max-w-2xl mx-auto">{description}</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-purple-50 transition-all transform hover:scale-105">
            {ctaText}
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
            {secondaryCtaText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LargeHero;
