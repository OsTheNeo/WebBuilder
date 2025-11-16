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
 <section className="w-full flex items-center justify-center px-8 py-6">
 <div className="max-w-6xl w-full">
 <div className="text-center mb-6">
 <h2 className="text-3xl font-bold text-gray-900 mb-1">{title}</h2>
 <p className="text-gray-600">{subtitle}</p>
 </div>
 <div className="grid grid-cols-3 gap-6">
 {plans.map((plan, index) => (
 <div key={index} className={`${plan.featured ? 'bg-white text-indigo-600 scale-105' : 'bg-indigo-600/50 text-gray-900'} backdrop-blur-sm rounded-xl p-5 text-center border-2 ${plan.featured ? 'border-gray-300' : 'border-indigo-400/50'}`}>
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
 <button className={`${plan.featured ? 'bg-indigo-600 text-gray-900' : 'bg-white text-indigo-600'} px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all w-full text-sm`}>
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
StandardPricing.blockMeta = {
 id: 'pricing-2',
 name: 'Standard Pricing',
 category: 'pricing',
 height: 'h-48',
 defaultData: {
 title: 'Choose Your Plan',
 subtitle: 'Flexible pricing for every need',
 plans: [
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
 },
 getTree: (data = {}) => {
 const { title = 'Choose Your Plan', subtitle = 'Flexible pricing for every need', plans = [] } = data;
 return {
 id: 'standard-pricing-root',
 tag: 'section',
 label: 'Pricing Section',
 className: 'w-full flex items-center justify-center px-8 py-6',
 children: [
 {
 id: 'standard-pricing-container',
 tag: 'div',
 label: 'Container',
 className: 'max-w-6xl w-full',
 children: [
 {
 id: 'standard-pricing-header',
 tag: 'div',
 label: 'Header',
 className: 'text-center mb-6',
 children: [
 {
 id: 'standard-pricing-title',
 tag: 'h2',
 label: 'Title',
 content: title,
 className: 'text-3xl font-bold text-gray-900 mb-1',
 editable: true
 },
 {
 id: 'standard-pricing-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: subtitle,
 className: 'text-gray-600',
 editable: true
 }
 ]
 },
 {
 id: 'standard-pricing-grid',
 tag: 'div',
 label: 'Plans Grid',
 className: 'grid grid-cols-3 gap-6',
 children: plans.map((plan, index) => ({
 id: `standard-pricing-plan-${index}`,
 tag: 'div',
 label: `${plan.name} Plan`,
 className: `${plan.featured ? 'bg-white text-indigo-600 scale-105' : 'bg-indigo-600/50 text-gray-900'} backdrop-blur-sm rounded-xl p-5 text-center border-2 ${plan.featured ? 'border-gray-300' : 'border-indigo-400/50'}`,
 children: [
 {
 id: `standard-pricing-plan-${index}-name`,
 tag: 'h3',
 label: 'Plan Name',
 content: plan.name,
 className: 'font-bold text-lg mb-2',
 editable: true
 },
 {
 id: `standard-pricing-plan-${index}-price-wrapper`,
 tag: 'div',
 label: 'Price Wrapper',
 className: 'flex items-baseline justify-center mb-3',
 children: [
 {
 id: `standard-pricing-plan-${index}-price`,
 tag: 'span',
 label: 'Price',
 content: plan.price,
 className: 'text-3xl font-bold',
 editable: true
 },
 {
 id: `standard-pricing-plan-${index}-period`,
 tag: 'span',
 label: 'Period',
 content: plan.period,
 className: 'text-sm opacity-75 ml-1',
 editable: true
 }
 ]
 },
 {
 id: `standard-pricing-plan-${index}-features`,
 tag: 'div',
 label: 'Features List',
 className: 'space-y-1 mb-4 text-sm',
 children: plan.features.map((feature, fIdx) => ({
 id: `standard-pricing-plan-${index}-feature-${fIdx}`,
 tag: 'div',
 label: `Feature ${fIdx + 1}`,
 content: `✓ ${feature}`,
 editable: true
 }))
 },
 {
 id: `standard-pricing-plan-${index}-button`,
 tag: 'button',
 label: 'CTA Button',
 content: plan.buttonText,
 className: `${plan.featured ? 'bg-indigo-600 text-gray-900' : 'bg-white text-indigo-600'} px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-all w-full text-sm`,
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

export default StandardPricing;
