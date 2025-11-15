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
    <section className="w-full h-32 bg-gradient-to-r from-indigo-500 to-indigo-700 flex items-center justify-center px-8">
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
    </section>
  );
};

// Block metadata and structure for tree mapping
CompactPricing.blockMeta = {
  id: 'pricing-1',
  name: 'Compact Pricing',
  category: 'pricing',
  height: 'h-32',
  defaultData: {
    title: 'Simple Pricing',
    plans: [
      { name: 'Basic', price: '$9', period: '/mo' },
      { name: 'Pro', price: '$29', period: '/mo', featured: true },
      { name: 'Enterprise', price: '$99', period: '/mo' }
    ]
  },
  getTree: (data = {}) => {
    const { title = 'Simple Pricing', plans = [] } = data;
    return {
      id: 'compact-pricing-root',
      tag: 'section',
      label: 'Pricing Section',
      className: 'w-full h-32 bg-gradient-to-r from-indigo-500 to-indigo-700 flex items-center justify-center px-8',
      children: [
        {
          id: 'compact-pricing-container',
          tag: 'div',
          label: 'Container',
          className: 'max-w-5xl w-full',
          children: [
            {
              id: 'compact-pricing-title',
              tag: 'h2',
              label: 'Title',
              content: title,
              className: 'text-2xl font-bold text-white text-center mb-4',
              editable: true
            },
            {
              id: 'compact-pricing-grid',
              tag: 'div',
              label: 'Plans Grid',
              className: 'grid grid-cols-3 gap-4',
              children: plans.map((plan, index) => ({
                id: `compact-pricing-plan-${index}`,
                tag: 'div',
                label: `${plan.name} Plan`,
                className: `${plan.featured ? 'bg-white text-indigo-600' : 'bg-indigo-600 text-white'} rounded-lg p-3 text-center transition-all hover:scale-105`,
                children: [
                  {
                    id: `compact-pricing-plan-${index}-name`,
                    tag: 'div',
                    label: 'Plan Name',
                    content: plan.name,
                    className: 'font-bold text-sm mb-1',
                    editable: true
                  },
                  {
                    id: `compact-pricing-plan-${index}-price-wrapper`,
                    tag: 'div',
                    label: 'Price Wrapper',
                    className: 'flex items-baseline justify-center',
                    children: [
                      {
                        id: `compact-pricing-plan-${index}-price`,
                        tag: 'span',
                        label: 'Price',
                        content: plan.price,
                        className: 'text-2xl font-bold',
                        editable: true
                      },
                      {
                        id: `compact-pricing-plan-${index}-period`,
                        tag: 'span',
                        label: 'Period',
                        content: plan.period,
                        className: 'text-sm opacity-75',
                        editable: true
                      }
                    ]
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

export default CompactPricing;
