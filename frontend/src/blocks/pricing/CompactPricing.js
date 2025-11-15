import React from 'react';

const CompactPricing = ({ data = {} }) => {
  const {
    title = 'Simple Pricing',
    plans = [
      { name: 'Basic', price: '$9', period: '/mo' },
      { name: 'Pro', price: '$29', period: '/mo', featured: true },
      { name: 'Enterprise', price: '$99', period: '/mo' }
    ]
  } = data;

  return (
    <div className="w-full h-32 bg-gradient-to-r from-indigo-500 to-indigo-700 flex items-center justify-center px-8">
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-4">{title}</h2>
        <div className="grid grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <div key={index} className={`${plan.featured ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white'} rounded-lg p-3 text-center transition-all hover:scale-105`}>
              <div className="font-bold text-sm mb-1">{plan.name}</div>
              <div className="flex items-baseline justify-center">
                <span className="text-2xl font-bold">{plan.price}</span>
                <span className="text-sm opacity-75">{plan.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompactPricing;
