import React from 'react';

const LargeFeatures = ({ data = {} }) => {
  const {
    title = 'Powerful Features',
    subtitle = 'Everything you need to succeed',
    features = [
      { name: 'Advanced Analytics', icon: '📊', description: 'Deep insights into your data with real-time dashboards' },
      { name: 'Cloud Integration', icon: '☁️', description: 'Seamlessly connect with popular cloud services' },
      { name: 'API Access', icon: '🔌', description: 'Full REST API with comprehensive documentation' },
      { name: 'Team Collaboration', icon: '👥', description: 'Work together with powerful collaboration tools' },
      { name: 'Custom Workflows', icon: '⚙️', description: 'Build automated workflows that fit your needs' },
      { name: 'Security First', icon: '🛡️', description: 'Enterprise-grade security and compliance' }
    ]
  } = data;

  return (
    <div className="w-full h-64 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center px-8 py-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
          <p className="text-xl text-green-100">{subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all">
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-white text-lg mb-2">{feature.name}</h3>
              <p className="text-sm text-green-50 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargeFeatures;
