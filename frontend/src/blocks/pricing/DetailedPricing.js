import React from 'react';

const DetailedPricing = ({ data = {} }) => {
  const {
    title = 'Flexible Pricing Solutions',
    subtitle = 'Scale with confidence - pay only for what you need',
    description = 'All plans include a 14-day free trial. No credit card required.',
    badgeText = 'MOST POPULAR',
    plans = [
      {
        name: 'Starter',
        price: '$19',
        period: '/month',
        yearlyPrice: '$199/year',
        description: 'Ideal for freelancers and solo entrepreneurs',
        features: [
          { name: '5 Active Projects', included: true },
          { name: 'Basic Analytics Dashboard', included: true },
          { name: '10GB Storage', included: true },
          { name: 'Email Support', included: true },
          { name: 'API Access', included: false },
          { name: 'Custom Domain', included: false }
        ],
        buttonText: 'Start Free Trial',
        popular: false
      },
      {
        name: 'Business',
        price: '$59',
        period: '/month',
        yearlyPrice: '$599/year',
        description: 'Perfect for small to medium teams',
        features: [
          { name: 'Unlimited Projects', included: true },
          { name: 'Advanced Analytics & Reports', included: true },
          { name: '100GB Storage', included: true },
          { name: 'Priority Email Support', included: true },
          { name: 'Full API Access', included: true },
          { name: 'Custom Domain', included: true },
          { name: 'Team Collaboration', included: true },
          { name: 'Advanced Integrations', included: true }
        ],
        buttonText: 'Start Free Trial',
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$149',
        period: '/month',
        yearlyPrice: '$1,499/year',
        description: 'For large organizations with advanced needs',
        features: [
          { name: 'Unlimited Everything', included: true },
          { name: 'Real-time Analytics', included: true },
          { name: 'Unlimited Storage', included: true },
          { name: '24/7 Phone & Email Support', included: true },
          { name: 'Advanced API & Webhooks', included: true },
          { name: 'Multiple Custom Domains', included: true },
          { name: 'Advanced Security', included: true },
          { name: 'Dedicated Account Manager', included: true },
          { name: 'SLA Guarantee (99.9%)', included: true },
          { name: 'Custom Contracts', included: true }
        ],
        buttonText: 'Contact Sales',
        popular: false
      }
    ]
  } = data;

  return (
    <section className="w-full h-80 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 flex items-center justify-center px-8 py-10">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-white mb-3">{title}</h2>
          <p className="text-2xl text-indigo-100 mb-2">{subtitle}</p>
          <p className="text-lg text-indigo-200">{description}</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className={`relative ${plan.popular ? 'bg-white text-indigo-600 scale-105 shadow-2xl' : 'bg-white/10 text-white backdrop-blur-lg'} rounded-2xl p-6 border-2 ${plan.popular ? 'border-indigo-100' : 'border-white/20'} transition-all hover:scale-105`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  {badgeText}
                </div>
              )}
              <div className="text-center mb-4">
                <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-indigo-500' : 'text-indigo-100'}`}>{plan.description}</p>
                <div className="mb-2">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-base opacity-75 ml-1">{plan.period}</span>
                  </div>
                  <div className={`text-xs mt-1 ${plan.popular ? 'text-indigo-400' : 'text-indigo-200'}`}>
                    or {plan.yearlyPrice}
                  </div>
                </div>
              </div>
              <div className="space-y-2 mb-6 max-h-32 overflow-y-auto">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className={`flex items-center gap-2 text-xs ${!feature.included ? 'opacity-50' : ''}`}>
                    <span className="font-bold">{feature.included ? '✓' : '✗'}</span>
                    <span>{feature.name}</span>
                  </div>
                ))}
              </div>
              <button className={`${plan.popular ? 'bg-gradient-to-r from-indigo-600 to-indigo-800 text-white' : 'bg-white text-indigo-600'} px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all w-full shadow-lg`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Block metadata and structure for tree mapping
DetailedPricing.blockMeta = {
  id: 'pricing-4',
  name: 'Detailed Pricing',
  category: 'pricing',
  height: 'h-80',
  defaultData: {
    title: 'Flexible Pricing Solutions',
    subtitle: 'Scale with confidence - pay only for what you need',
    description: 'All plans include a 14-day free trial. No credit card required.',
    badgeText: 'MOST POPULAR',
    plans: [
      {
        name: 'Starter',
        price: '$19',
        period: '/month',
        yearlyPrice: '$199/year',
        description: 'Ideal for freelancers and solo entrepreneurs',
        features: [
          { name: '5 Active Projects', included: true },
          { name: 'Basic Analytics Dashboard', included: true },
          { name: '10GB Storage', included: true },
          { name: 'Email Support', included: true },
          { name: 'API Access', included: false },
          { name: 'Custom Domain', included: false }
        ],
        buttonText: 'Start Free Trial',
        popular: false
      },
      {
        name: 'Business',
        price: '$59',
        period: '/month',
        yearlyPrice: '$599/year',
        description: 'Perfect for small to medium teams',
        features: [
          { name: 'Unlimited Projects', included: true },
          { name: 'Advanced Analytics & Reports', included: true },
          { name: '100GB Storage', included: true },
          { name: 'Priority Email Support', included: true },
          { name: 'Full API Access', included: true },
          { name: 'Custom Domain', included: true },
          { name: 'Team Collaboration', included: true },
          { name: 'Advanced Integrations', included: true }
        ],
        buttonText: 'Start Free Trial',
        popular: true
      },
      {
        name: 'Enterprise',
        price: '$149',
        period: '/month',
        yearlyPrice: '$1,499/year',
        description: 'For large organizations with advanced needs',
        features: [
          { name: 'Unlimited Everything', included: true },
          { name: 'Real-time Analytics', included: true },
          { name: 'Unlimited Storage', included: true },
          { name: '24/7 Phone & Email Support', included: true },
          { name: 'Advanced API & Webhooks', included: true },
          { name: 'Multiple Custom Domains', included: true },
          { name: 'Advanced Security', included: true },
          { name: 'Dedicated Account Manager', included: true },
          { name: 'SLA Guarantee (99.9%)', included: true },
          { name: 'Custom Contracts', included: true }
        ],
        buttonText: 'Contact Sales',
        popular: false
      }
    ]
  },
  getTree: (data = {}) => {
    const {
      title = 'Flexible Pricing Solutions',
      subtitle = 'Scale with confidence - pay only for what you need',
      description = 'All plans include a 14-day free trial. No credit card required.',
      badgeText = 'MOST POPULAR',
      plans = []
    } = data;
    return {
      id: 'detailed-pricing-root',
      tag: 'section',
      label: 'Pricing Section',
      className: 'w-full h-80 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 flex items-center justify-center px-8 py-10',
      children: [
        {
          id: 'detailed-pricing-container',
          tag: 'div',
          label: 'Container',
          className: 'max-w-7xl w-full',
          children: [
            {
              id: 'detailed-pricing-header',
              tag: 'div',
              label: 'Header',
              className: 'text-center mb-8',
              children: [
                {
                  id: 'detailed-pricing-title',
                  tag: 'h2',
                  label: 'Title',
                  content: title,
                  className: 'text-5xl font-bold text-white mb-3',
                  editable: true
                },
                {
                  id: 'detailed-pricing-subtitle',
                  tag: 'p',
                  label: 'Subtitle',
                  content: subtitle,
                  className: 'text-2xl text-indigo-100 mb-2',
                  editable: true
                },
                {
                  id: 'detailed-pricing-description',
                  tag: 'p',
                  label: 'Description',
                  content: description,
                  className: 'text-lg text-indigo-200',
                  editable: true
                }
              ]
            },
            {
              id: 'detailed-pricing-grid',
              tag: 'div',
              label: 'Plans Grid',
              className: 'grid grid-cols-3 gap-6',
              children: plans.map((plan, index) => ({
                id: `detailed-pricing-plan-${index}`,
                tag: 'div',
                label: `${plan.name} Plan`,
                className: `relative ${plan.popular ? 'bg-white text-indigo-600 scale-105 shadow-2xl' : 'bg-white/10 text-white backdrop-blur-lg'} rounded-2xl p-6 border-2 ${plan.popular ? 'border-indigo-100' : 'border-white/20'} transition-all hover:scale-105`,
                children: [
                  ...(plan.popular ? [{
                    id: `detailed-pricing-plan-${index}-badge`,
                    tag: 'div',
                    label: 'Badge',
                    content: badgeText,
                    className: 'absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold shadow-lg',
                    editable: true
                  }] : []),
                  {
                    id: `detailed-pricing-plan-${index}-header`,
                    tag: 'div',
                    label: 'Plan Header',
                    className: 'text-center mb-4',
                    children: [
                      {
                        id: `detailed-pricing-plan-${index}-name`,
                        tag: 'h3',
                        label: 'Plan Name',
                        content: plan.name,
                        className: 'font-bold text-2xl mb-2',
                        editable: true
                      },
                      {
                        id: `detailed-pricing-plan-${index}-description`,
                        tag: 'p',
                        label: 'Description',
                        content: plan.description,
                        className: `text-sm mb-4 ${plan.popular ? 'text-indigo-500' : 'text-indigo-100'}`,
                        editable: true
                      },
                      {
                        id: `detailed-pricing-plan-${index}-price-container`,
                        tag: 'div',
                        label: 'Price Container',
                        className: 'mb-2',
                        children: [
                          {
                            id: `detailed-pricing-plan-${index}-price-wrapper`,
                            tag: 'div',
                            label: 'Price Wrapper',
                            className: 'flex items-baseline justify-center',
                            children: [
                              {
                                id: `detailed-pricing-plan-${index}-price`,
                                tag: 'span',
                                label: 'Price',
                                content: plan.price,
                                className: 'text-4xl font-bold',
                                editable: true
                              },
                              {
                                id: `detailed-pricing-plan-${index}-period`,
                                tag: 'span',
                                label: 'Period',
                                content: plan.period,
                                className: 'text-base opacity-75 ml-1',
                                editable: true
                              }
                            ]
                          },
                          {
                            id: `detailed-pricing-plan-${index}-yearly`,
                            tag: 'div',
                            label: 'Yearly Price',
                            content: `or ${plan.yearlyPrice}`,
                            className: `text-xs mt-1 ${plan.popular ? 'text-indigo-400' : 'text-indigo-200'}`,
                            editable: true
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: `detailed-pricing-plan-${index}-features`,
                    tag: 'div',
                    label: 'Features List',
                    className: 'space-y-2 mb-6 max-h-32 overflow-y-auto',
                    children: plan.features.map((feature, fIdx) => ({
                      id: `detailed-pricing-plan-${index}-feature-${fIdx}`,
                      tag: 'div',
                      label: `Feature ${fIdx + 1}`,
                      className: `flex items-center gap-2 text-xs ${!feature.included ? 'opacity-50' : ''}`,
                      children: [
                        {
                          id: `detailed-pricing-plan-${index}-feature-${fIdx}-icon`,
                          tag: 'span',
                          content: feature.included ? '✓' : '✗',
                          className: 'font-bold'
                        },
                        {
                          id: `detailed-pricing-plan-${index}-feature-${fIdx}-text`,
                          tag: 'span',
                          label: 'Feature Text',
                          content: feature.name,
                          editable: true
                        }
                      ]
                    }))
                  },
                  {
                    id: `detailed-pricing-plan-${index}-button`,
                    tag: 'button',
                    label: 'CTA Button',
                    content: plan.buttonText,
                    className: `${plan.popular ? 'bg-gradient-to-r from-indigo-600 to-indigo-800 text-white' : 'bg-white text-indigo-600'} px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all w-full shadow-lg`,
                    editable: true
                  }
                ]
              }))
            }
          ]
        }
      ]
    };
  }
};

export default DetailedPricing;
