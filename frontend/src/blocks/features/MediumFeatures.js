import React from 'react';

const MediumFeatures = ({ data = {} }) => {
  const {
    title = 'Why Choose Us',
    subtitle = 'Features that make a difference',
    features = [
      { name: 'Lightning Fast', icon: '⚡', description: 'Optimized performance' },
      { name: 'Secure', icon: '🔒', description: 'Enterprise-grade security' },
      { name: 'Scalable', icon: '📈', description: 'Grows with you' },
      { name: 'Support', icon: '💬', description: '24/7 assistance' }
    ]
  } = data;

  return (
    <div className="w-full h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center px-8 py-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-1">{title}</h2>
          <p className="text-green-100">{subtitle}</p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-3xl mb-1">{feature.icon}</div>
              <div className="font-bold text-white mb-1">{feature.name}</div>
              <div className="text-xs text-green-50">{feature.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MediumFeatures;
