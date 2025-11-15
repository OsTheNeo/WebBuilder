import React from 'react';

const LargeCTA = ({ data = {} }) => {
  const {
    title = 'Transform Your Business Today',
    subtitle = 'Join over 10,000 companies already using our platform',
    description = 'Start your 14-day free trial. No credit card required. Full access to all features.',
    ctaText = 'Start Free Trial',
    secondaryCtaText = 'Schedule Demo',
    features = ['14-day free trial', 'No credit card', 'Cancel anytime', '24/7 support']
  } = data;

  return (
    <div className="w-full h-64 bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center px-8 py-8">
      <div className="max-w-5xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-white mb-3">{title}</h2>
          <p className="text-2xl text-red-100 mb-2">{subtitle}</p>
          <p className="text-lg text-red-200 max-w-3xl mx-auto">{description}</p>
        </div>

        <div className="flex gap-4 justify-center mb-6">
          <button className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-xl">
            {ctaText}
          </button>
          <button className="bg-red-700 text-white border-2 border-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-800 transition-all transform hover:scale-105 shadow-xl">
            {secondaryCtaText}
          </button>
        </div>

        <div className="flex gap-8 justify-center">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-white">
              <span className="text-xl">✓</span>
              <span className="font-semibold">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargeCTA;
