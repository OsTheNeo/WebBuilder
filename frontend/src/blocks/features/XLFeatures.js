import React from 'react';

const XLFeatures = ({ data = {} }) => {
  const {
    title = 'Complete Feature Set',
    subtitle = 'Professional tools for modern teams',
    description = 'Discover all the features that make our platform the best choice for your business',
    features = [
      { name: 'Real-time Collaboration', icon: '🤝', description: 'Work together seamlessly with your team in real-time across all devices' },
      { name: 'Advanced Analytics', icon: '📊', description: 'Comprehensive analytics and reporting tools to track your progress' },
      { name: 'AI-Powered Insights', icon: '🧠', description: 'Leverage artificial intelligence to gain deeper insights from your data' },
      { name: 'Custom Integrations', icon: '🔗', description: 'Connect with your favorite tools through our extensive API' },
      { name: 'Enterprise Security', icon: '🔐', description: 'Bank-level encryption and compliance with industry standards' },
      { name: 'Unlimited Storage', icon: '💾', description: 'Store all your data without worrying about limits or restrictions' }
    ]
  } = data;

  return (
    <div className="w-full h-80 bg-gradient-to-br from-green-500 via-green-600 to-teal-700 flex items-center justify-center px-8 py-10">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-white mb-3">{title}</h2>
          <p className="text-2xl text-green-100 mb-2">{subtitle}</p>
          <p className="text-lg text-green-200 max-w-3xl mx-auto">{description}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/15 backdrop-blur-lg rounded-2xl p-6 border border-white/25 hover:bg-white/25 transition-all transform hover:scale-105">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-white text-xl mb-3">{feature.name}</h3>
              <p className="text-green-50 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default XLFeatures;
