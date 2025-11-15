import React from 'react';

const SmallFeatures = ({ data = {} }) => {
  const {
    title = 'Key Features',
    features = [
      { name: 'Fast', icon: '⚡' },
      { name: 'Secure', icon: '🔒' },
      { name: 'Scalable', icon: '📈' }
    ]
  } = data;

  return (
    <div className="w-full h-32 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center px-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-3">{title}</h2>
        <div className="flex gap-8 justify-center">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-white">
              <span className="text-2xl">{feature.icon}</span>
              <span className="font-semibold">{feature.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmallFeatures;
