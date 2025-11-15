import React from 'react';

const XLCTA = ({ data = {} }) => {
  const {
    title = 'Ready to Accelerate Your Growth?',
    subtitle = 'Join thousands of successful businesses',
    description = 'Everything you need to scale your business, all in one powerful platform',
    ctaText = 'Start Your Free Trial',
    secondaryCtaText = 'Book a Demo',
    stats = [
      { value: '10,000+', label: 'Active Users' },
      { value: '99.9%', label: 'Uptime' },
      { value: '4.9/5', label: 'Rating' },
      { value: '24/7', label: 'Support' }
    ],
    features = ['Free 14-day trial', 'No credit card required', 'Cancel anytime', 'Full feature access', 'Priority support', 'Money-back guarantee']
  } = data;

  return (
    <div className="w-full h-80 bg-gradient-to-br from-red-600 via-red-700 to-pink-700 flex items-center justify-center px-8 py-10">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-6xl font-bold text-white mb-4">{title}</h2>
          <p className="text-2xl text-red-100 font-semibold mb-3">{subtitle}</p>
          <p className="text-xl text-red-200 max-w-4xl mx-auto leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-white/25">
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-red-100 text-sm font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-6 justify-center mb-6">
          <button className="bg-white text-red-600 px-12 py-4 rounded-xl font-bold text-xl hover:bg-red-50 transition-all transform hover:scale-105 shadow-2xl">
            {ctaText}
          </button>
          <button className="bg-red-700 text-white border-3 border-white px-12 py-4 rounded-xl font-bold text-xl hover:bg-red-800 transition-all transform hover:scale-105 shadow-2xl">
            {secondaryCtaText}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-white justify-center">
              <span className="text-xl">✓</span>
              <span className="font-semibold">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XLCTA;
