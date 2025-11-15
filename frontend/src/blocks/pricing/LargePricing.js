import React from 'react';

const LargePricing = ({ data = {} }) => {
  const {
    title = 'Pricing Plans',
    subtitle = 'Choose the perfect plan for your business',
    billingToggle = 'monthly',
    plans = [
      {
        name: 'Basic',
        price: '$29',
        period: '/month',
        description: 'Perfect for individuals and small teams',
        features: ['10 Projects', 'Basic Analytics', 'Email Support', '50GB Storage', 'API Access'],
        buttonText: 'Start Free Trial',
        highlighted: false
      },
      {
        name: 'Professional',
        price: '$79',
        period: '/month',
        description: 'Best for growing businesses',
        features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '500GB Storage', 'API Access', 'Custom Integrations'],
        buttonText: 'Get Started',
        highlighted: true
      },
      {
        name: 'Enterprise',
        price: '$199',
        period: '/month',
        description: 'For large organizations',
        features: ['Unlimited Everything', 'Real-time Analytics', '24/7 Phone Support', 'Unlimited Storage', 'Advanced API', 'Dedicated Manager', 'SLA Guarantee'],
        buttonText: 'Contact Sales',
        highlighted: false
      }
    ]
  } = data;

  return (
    <div className="w-full h-64 bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center px-8 py-8">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
          <p className="text-xl text-indigo-100">{subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className={`${plan.highlighted ? 'bg-white text-indigo-600 scale-105 shadow-2xl' : 'bg-white/10 text-white backdrop-blur-md'} rounded-2xl p-6 border-2 ${plan.highlighted ? 'border-white' : 'border-white/20'} hover:scale-105 transition-all`}>
              <div className="text-center mb-4">
                <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-indigo-500' : 'text-indigo-100'}`}>{plan.description}</p>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-lg opacity-75 ml-1">{plan.period}</span>
                </div>
              </div>
              <div className="space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="font-bold">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`${plan.highlighted ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all w-full shadow-lg`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargePricing;
