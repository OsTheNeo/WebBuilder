import React from 'react';

const LargeCTA = ({ data = {} }) => {
 const {
 title = 'Transform Your Business Today',
 subtitle = 'Join over 10,000 companies already using our platform',
 description = 'Start your 14-day free trial. No credit card required. Full access to all features.',
 ctaText = 'Start Free Trial',
 secondaryCtaText = 'Schedule Demo',
 features = ['14-day free trial', 'No credit card', 'Cancel anytime', '24/7 support']
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-8">
 <div className="max-w-5xl w-full">
 <div className="text-center mb-8">
 <h2 className="text-5xl font-bold text-gray-900 mb-3">{title}</h2>
 <p className="text-2xl text-red-100 mb-2">{subtitle}</p>
 <p className="text-lg text-red-200 max-w-3xl mx-auto">{description}</p>
 </div>

 <div className="flex gap-4 justify-center mb-6">
 <button className="bg-white text-red-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-xl">
 {ctaText}
 </button>
 <button className="bg-red-700 text-gray-900 border-2 border-gray-300 px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-800 transition-all transform hover:scale-105 shadow-xl">
 {secondaryCtaText}
 </button>
 </div>

 <div className="flex gap-8 justify-center">
 {features.map((feature, index) => (
 <div key={index} className="flex items-center gap-2 text-gray-900">
 <span className="text-xl">✓</span>
 <span className="font-semibold">{feature}</span>
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
LargeCTA.blockMeta = {
 id: 'cta-3',
 name: 'Large CTA',
 category: 'ctas',
 height: 'h-64',
 defaultData: {
 title: 'Transform Your Business Today',
 subtitle: 'Join over 10,000 companies already using our platform',
 description: 'Start your 14-day free trial. No credit card required. Full access to all features.',
 ctaText: 'Start Free Trial',
 secondaryCtaText: 'Schedule Demo',
 features: ['14-day free trial', 'No credit card', 'Cancel anytime', '24/7 support']
 },
 // Tree structure definition
 getTree: (data = {}) => {
 const features = data.features || ['14-day free trial', 'No credit card', 'Cancel anytime', '24/7 support'];

 return {
 id: 'large-cta-root',
 tag: 'section',
 label: 'CTA Container',
 className: 'w-full flex items-center justify-center px-8 py-8',
 children: [
 {
 id: 'large-cta-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'max-w-5xl w-full',
 children: [
 {
 id: 'large-cta-header',
 tag: 'div',
 label: 'Header Section',
 className: 'text-center mb-8',
 children: [
 {
 id: 'large-cta-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'Transform Your Business Today',
 className: 'text-5xl font-bold text-gray-900 mb-3',
 editable: true
 },
 {
 id: 'large-cta-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Join over 10,000 companies already using our platform',
 className: 'text-2xl text-red-100 mb-2',
 editable: true
 },
 {
 id: 'large-cta-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'Start your 14-day free trial. No credit card required. Full access to all features.',
 className: 'text-lg text-red-200 max-w-3xl mx-auto',
 editable: true
 }
 ]
 },
 {
 id: 'large-cta-button-group',
 tag: 'div',
 label: 'Button Group',
 className: 'flex gap-4 justify-center mb-6',
 children: [
 {
 id: 'large-cta-primary-button',
 tag: 'button',
 label: 'Primary Button',
 content: data.ctaText || 'Start Free Trial',
 className: 'bg-white text-red-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition-all transform hover:scale-105 shadow-xl',
 editable: true
 },
 {
 id: 'large-cta-secondary-button',
 tag: 'button',
 label: 'Secondary Button',
 content: data.secondaryCtaText || 'Schedule Demo',
 className: 'bg-red-700 text-gray-900 border-2 border-gray-300 px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-800 transition-all transform hover:scale-105 shadow-xl',
 editable: true
 }
 ]
 },
 {
 id: 'large-cta-features',
 tag: 'div',
 label: 'Features Container',
 className: 'flex gap-8 justify-center',
 children: features.map((feature, index) => ({
 id: `large-cta-feature-${index}`,
 tag: 'div',
 label: `Feature ${index + 1}`,
 className: 'flex items-center gap-2 text-gray-900',
 children: [
 {
 id: `large-cta-feature-icon-${index}`,
 tag: 'span',
 label: 'Checkmark',
 content: '✓',
 className: 'text-xl',
 editable: false
 },
 {
 id: `large-cta-feature-text-${index}`,
 tag: 'span',
 label: 'Feature Text',
 content: feature,
 className: 'font-semibold',
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

export default LargeCTA;
