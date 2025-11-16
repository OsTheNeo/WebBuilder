import React from 'react';

const LargePricing = ({ data = {} }) => {
 const {
 title = 'Pricing Plans',
 subtitle = 'Choose the perfect plan for your business',
 badgeText = 'POPULAR',
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
 <section className="w-full flex items-center justify-center px-8 py-8">
 <div className="max-w-7xl w-full">
 <div className="text-center mb-8">
 <h2 className="text-4xl font-bold text-gray-900 mb-2">{title}</h2>
 <p className="text-xl text-gray-600">{subtitle}</p>
 </div>
 <div className="grid grid-cols-3 gap-6">
 {plans.map((plan, index) => (
 <div key={index} className={`relative ${plan.highlighted ? 'bg-white text-indigo-600 scale-105 shadow-2xl' : 'bg-white/10 text-gray-900 backdrop-blur-md'} rounded-2xl p-6 border-2 ${plan.highlighted ? 'border-gray-300' : 'border-gray-300/20'} hover:scale-105 transition-all`}>
 {plan.highlighted && (
 <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold">
 {badgeText}
 </div>
 )}
 <div className="text-center mb-4">
 <h3 className="font-bold text-2xl mb-2">{plan.name}</h3>
 <p className={`text-sm mb-4 ${plan.highlighted ? 'text-indigo-500' : 'text-gray-600'}`}>{plan.description}</p>
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
 <button className={`${plan.highlighted ? 'bg-indigo-600 text-gray-900' : 'bg-white text-indigo-600'} px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all w-full shadow-lg`}>
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
LargePricing.blockMeta = {
 id: 'pricing-3',
 name: 'Large Pricing',
 category: 'pricing',
 height: 'h-64',
 defaultData: {
 title: 'Pricing Plans',
 subtitle: 'Choose the perfect plan for your business',
 badgeText: 'POPULAR',
 plans: [
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
 },
 getTree: (data = {}) => {
 const { title = 'Pricing Plans', subtitle = 'Choose the perfect plan for your business', badgeText = 'POPULAR', plans = [] } = data;
 return {
 id: 'large-pricing-root',
 tag: 'section',
 label: 'Pricing Section',
 className: 'w-full flex items-center justify-center px-8 py-8',
 children: [
 {
 id: 'large-pricing-container',
 tag: 'div',
 label: 'Container',
 className: 'max-w-7xl w-full',
 children: [
 {
 id: 'large-pricing-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-8',
 children: [
 {
 id: 'large-pricing-title',
 tag: 'h2',
 label: 'Title',
 content: title,
 className: 'text-4xl font-bold text-gray-900 mb-2',
 editable: true
 },
 {
 id: 'large-pricing-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: subtitle,
 className: 'text-xl text-gray-600',
 editable: true
 }
 ]
 },
 {
 id: 'large-pricing-grid',
 tag: 'div',
 label: 'Plans Grid',
 className: 'grid grid-cols-3 gap-6',
 children: plans.map((plan, index) => ({
 id: `large-pricing-plan-${index}`,
 tag: 'div',
 label: `${plan.name} Plan`,
 className: `relative ${plan.highlighted ? 'bg-white text-indigo-600 scale-105 shadow-2xl' : 'bg-white/10 text-gray-900 backdrop-blur-md'} rounded-2xl p-6 border-2 ${plan.highlighted ? 'border-gray-300' : 'border-gray-300/20'} hover:scale-105 transition-all`,
 children: [
 ...(plan.highlighted ? [{
 id: `large-pricing-plan-${index}-badge`,
 tag: 'div',
 label: 'Badge',
 content: badgeText,
 className: 'absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-xs font-bold',
 editable: true
 }] : []),
 {
 id: `large-pricing-plan-${index}-header`,
 tag: 'div',
 label: 'Plan Header',
 className: 'text-center mb-4',
 children: [
 {
 id: `large-pricing-plan-${index}-name`,
 tag: 'h3',
 label: 'Plan Name',
 content: plan.name,
 className: 'font-bold text-2xl mb-2',
 editable: true
 },
 {
 id: `large-pricing-plan-${index}-description`,
 tag: 'p',
 label: 'Description',
 content: plan.description,
 className: `text-sm mb-4 ${plan.highlighted ? 'text-indigo-500' : 'text-gray-600'}`,
 editable: true
 },
 {
 id: `large-pricing-plan-${index}-price-wrapper`,
 tag: 'div',
 label: 'Price Wrapper',
 className: 'flex items-baseline justify-center mb-4',
 children: [
 {
 id: `large-pricing-plan-${index}-price`,
 tag: 'span',
 label: 'Price',
 content: plan.price,
 className: 'text-5xl font-bold',
 editable: true
 },
 {
 id: `large-pricing-plan-${index}-period`,
 tag: 'span',
 label: 'Period',
 content: plan.period,
 className: 'text-lg opacity-75 ml-1',
 editable: true
 }
 ]
 }
 ]
 },
 {
 id: `large-pricing-plan-${index}-features`,
 tag: 'div',
 label: 'Features List',
 className: 'space-y-2 mb-6',
 children: plan.features.map((feature, fIdx) => ({
 id: `large-pricing-plan-${index}-feature-${fIdx}`,
 tag: 'div',
 label: `Feature ${fIdx + 1}`,
 className: 'flex items-center gap-2 text-sm',
 children: [
 {
 id: `large-pricing-plan-${index}-feature-${fIdx}-icon`,
 tag: 'span',
 content: '✓',
 className: 'font-bold'
 },
 {
 id: `large-pricing-plan-${index}-feature-${fIdx}-text`,
 tag: 'span',
 label: 'Feature Text',
 content: feature,
 editable: true
 }
 ]
 }))
 },
 {
 id: `large-pricing-plan-${index}-button`,
 tag: 'button',
 label: 'CTA Button',
 content: plan.buttonText,
 className: `${plan.highlighted ? 'bg-indigo-600 text-gray-900' : 'bg-white text-indigo-600'} px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-all w-full shadow-lg`,
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

export default LargePricing;
