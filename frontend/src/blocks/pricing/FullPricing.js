import React from 'react';

const FullPricing = ({ data = {} }) => {
  const {
    title = 'Transparent Pricing for Everyone',
    subtitle = 'Choose the perfect plan and scale as you grow',
    description = 'Start with a 30-day free trial. Upgrade, downgrade, or cancel anytime. No hidden fees.',
    billingPeriod = 'monthly',
    plans = [
      {
        name: 'Free',
        price: '$0',
        period: '/month',
        yearlyPrice: 'Free forever',
        description: 'Great for trying out our platform',
        features: [
          { name: '3 Projects', included: true },
          { name: 'Basic Features', included: true },
          { name: '5GB Storage', included: true },
          { name: 'Community Support', included: true },
          { name: 'Analytics Dashboard', included: false },
          { name: 'API Access', included: false },
          { name: 'Custom Branding', included: false }
        ],
        buttonText: 'Get Started',
        buttonStyle: 'outline'
      },
      {
        name: 'Pro',
        price: '$29',
        period: '/month',
        yearlyPrice: '$290/year (Save $58)',
        description: 'Perfect for professionals and small teams',
        features: [
          { name: '25 Projects', included: true },
          { name: 'All Pro Features', included: true },
          { name: '50GB Storage', included: true },
          { name: 'Priority Email Support', included: true },
          { name: 'Advanced Analytics', included: true },
          { name: 'API Access', included: true },
          { name: 'Custom Branding', included: true },
          { name: 'Team Collaboration (5 users)', included: true },
          { name: 'Integrations', included: true }
        ],
        buttonText: 'Start Free Trial',
        buttonStyle: 'solid',
        popular: true
      },
      {
        name: 'Business',
        price: '$79',
        period: '/month',
        yearlyPrice: '$790/year (Save $158)',
        description: 'Advanced features for growing businesses',
        features: [
          { name: 'Unlimited Projects', included: true },
          { name: 'All Business Features', included: true },
          { name: '200GB Storage', included: true },
          { name: 'Priority Phone & Email Support', included: true },
          { name: 'Real-time Analytics', included: true },
          { name: 'Advanced API & Webhooks', included: true },
          { name: 'White-label Options', included: true },
          { name: 'Team Collaboration (25 users)', included: true },
          { name: 'Premium Integrations', included: true },
          { name: 'Advanced Security', included: true },
          { name: 'Audit Logs', included: true }
        ],
        buttonText: 'Start Free Trial',
        buttonStyle: 'solid'
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        yearlyPrice: 'Contact us for pricing',
        description: 'Tailored solutions for large organizations',
        features: [
          { name: 'Unlimited Everything', included: true },
          { name: 'Custom Feature Development', included: true },
          { name: 'Unlimited Storage', included: true },
          { name: '24/7 Dedicated Support', included: true },
          { name: 'Custom Analytics & Reports', included: true },
          { name: 'Enterprise API', included: true },
          { name: 'Full White-label', included: true },
          { name: 'Unlimited Users', included: true },
          { name: 'Custom Integrations', included: true },
          { name: 'Enterprise Security & Compliance', included: true },
          { name: 'Dedicated Account Manager', included: true },
          { name: 'SLA Guarantee (99.99%)', included: true },
          { name: 'On-premise Deployment Option', included: true }
        ],
        buttonText: 'Contact Sales',
        buttonStyle: 'outline'
      }
    ],
    features = {
      title: 'All plans include:',
      items: ['SSL Certificate', 'Daily Backups', '99.9% Uptime SLA', 'GDPR Compliant', 'SOC 2 Certified']
    }
  } = data;

  return (
    <div className="w-full h-96 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 flex items-center justify-center px-8 py-12">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-6xl font-extrabold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-100">
            {title}
          </h2>
          <p className="text-2xl text-indigo-100 font-semibold mb-2">{subtitle}</p>
          <p className="text-lg text-indigo-200 mb-4">{description}</p>
          <div className="flex gap-4 justify-center">
            {features.items.map((item, index) => (
              <span key={index} className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                ✓ {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.popular ? 'bg-white text-indigo-600 scale-105 shadow-2xl' : 'bg-white/10 text-white backdrop-blur-lg'} rounded-2xl p-5 border-2 ${plan.popular ? 'border-yellow-400' : 'border-white/30'} transition-all hover:scale-105`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  ⭐ BEST VALUE
                </div>
              )}
              <div className="text-center mb-3">
                <h3 className="font-bold text-xl mb-1">{plan.name}</h3>
                <p className={`text-xs mb-3 ${plan.popular ? 'text-indigo-500' : 'text-indigo-100'} line-clamp-2`}>
                  {plan.description}
                </p>
                <div className="mb-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-sm opacity-75 ml-1">{plan.period}</span>}
                  </div>
                  <div className={`text-xs mt-1 ${plan.popular ? 'text-indigo-400' : 'text-indigo-200'}`}>
                    {plan.yearlyPrice}
                  </div>
                </div>
              </div>

              <div className="space-y-1 mb-4 text-xs max-h-28 overflow-y-auto">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className={`flex items-start gap-1 ${!feature.included ? 'opacity-40' : ''}`}>
                    <span className="font-bold text-xs mt-0.5">{feature.included ? '✓' : '✗'}</span>
                    <span className="leading-tight">{feature.name}</span>
                  </div>
                ))}
              </div>

              <button className={`${plan.buttonStyle === 'solid' ? (plan.popular ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' : 'bg-white text-indigo-600') : (plan.popular ? 'border-2 border-indigo-600 text-indigo-600' : 'border-2 border-white text-white')} px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-all w-full shadow-lg text-sm`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FullPricing;
