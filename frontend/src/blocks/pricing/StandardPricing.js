import React from 'react';

const StandardPricing = ({ data = {} }) => {
  const {
    title = 'Choose Your Plan',
    subtitle = 'Flexible pricing for every need',
    plans = [
      {
        name: 'Starter',
        price: '$19',
        period: '/month',
        features: ['5 Projects', 'Basic Support', '10GB Storage'],
        buttonText: 'Get Started'
      },
      {
        name: 'Professional',
        price: '$49',
        period: '/month',
        features: ['Unlimited Projects', 'Priority Support', '100GB Storage'],
        featured: true,
        buttonText: 'Start Free Trial'
      },
      {
        name: 'Enterprise',
        price: '$99',
        period: '/month',
        features: ['Custom Solutions', '24/7 Support', 'Unlimited Storage'],
        buttonText: 'Contact Sales'
      }
    ]
  } = data;

  return (
    <div className="w-full h-48 bg-gradient-to-r from-indigo-500 to-indigo-700 flex items-center justify-center px-8 py-6">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-1">{title}</h2>
          <p className="text-indigo-100">{subtitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className={`${plan.featured ? 'bg-white text-indigo-600 scale-105' : 'bg-indigo-600/50 text-white'} backdrop-blur-sm rounded-xl p-5 text-center border-2 ${plan.featured ? 'border-white' : 'border-indigo-400/50'}`}>
              <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center mb-3">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-sm opacity-75 ml-1">{plan.period}</span>
              </div>
              <div className="space-y-1 mb-4 text-sm">
                {plan.features.map((feature, idx) => (
                  <div key={idx}>✓ {feature}</div>
                ))}
              </div>
              <button className={`${plan.featured ? 'bg-indigo-600 text-white' : 'bg-white text-indigo-600'} px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all w-full text-sm`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StandardPricing;
