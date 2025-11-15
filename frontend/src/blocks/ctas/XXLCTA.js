import React from 'react';

const XXLCTA = ({ data = {} }) => {
  const {
    title = 'The Future of Your Business Starts Here',
    subtitle = 'Trusted by industry leaders worldwide',
    description = 'Transform your operations with our all-in-one platform. Powerful features, unbeatable support, guaranteed results.',
    ctaText = 'Start Free Trial',
    secondaryCtaText = 'Schedule Demo',
    tertiaryCtaText = 'View Pricing',
    stats = [
      { value: '50K+', label: 'Happy Customers', icon: '👥' },
      { value: '99.99%', label: 'Uptime SLA', icon: '⚡' },
      { value: '4.9/5', label: 'Average Rating', icon: '⭐' },
      { value: '<2min', label: 'Support Response', icon: '💬' }
    ],
    features = [
      'Full 30-day free trial',
      'No credit card required',
      'Cancel anytime, no fees',
      'All premium features included',
      'Priority 24/7 support',
      'Money-back guarantee',
      'Free onboarding & training',
      'Dedicated account manager'
    ],
    badges = ['SOC 2 Certified', 'GDPR Compliant', 'ISO 27001', 'PCI DSS']
  } = data;

  return (
    <div className="w-full h-96 bg-gradient-to-br from-red-600 via-pink-600 to-purple-700 flex items-center justify-center px-8 py-12">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-7xl font-extrabold text-white mb-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-red-100 leading-tight">
            {title}
          </h2>
          <p className="text-3xl text-red-100 font-bold mb-3">{subtitle}</p>
          <p className="text-xl text-red-200 max-w-5xl mx-auto leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 text-center border-2 border-white/30 hover:bg-white/25 transition-all transform hover:scale-105">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-red-100 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center mb-8">
          <button className="bg-white text-red-600 px-14 py-5 rounded-2xl font-bold text-xl hover:bg-red-50 transition-all transform hover:scale-110 shadow-2xl">
            {ctaText}
          </button>
          <button className="bg-gradient-to-r from-red-700 to-pink-700 text-white border-3 border-white px-14 py-5 rounded-2xl font-bold text-xl hover:from-red-800 hover:to-pink-800 transition-all transform hover:scale-110 shadow-2xl">
            {secondaryCtaText}
          </button>
          <button className="bg-transparent text-white border-3 border-white px-14 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all transform hover:scale-110">
            {tertiaryCtaText}
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-white justify-center bg-white/10 rounded-lg px-3 py-2">
              <span className="text-xl font-bold">✓</span>
              <span className="font-semibold text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-4 justify-center">
          {badges.map((badge, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full border border-white/30">
              {badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XXLCTA;
