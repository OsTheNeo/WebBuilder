import React from 'react';

const XLCTA = ({ data = {} }) => {
 const {
 title = 'Ready to Accelerate Your Growth?',
 subtitle = 'Join thousands of successful businesses',
 description = 'Everything you need to scale your business, all in one powerful platform',
 ctaText = 'Start Your Free Trial',
 secondaryCtaText = 'Book a Demo',
 stats = [
 { value: '10,000+', label: 'Active Users' },
 { value: '99.9%', label: 'Uptime' },
 { value: '4.9/5', label: 'Rating' },
 { value: '24/7', label: 'Support' }
 ],
 features = ['Free 14-day trial', 'No credit card required', 'Cancel anytime', 'Full feature access', 'Priority support', 'Money-back guarantee']
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-10">
 <div className="w-full">
 <div className="text-center mb-8">
 <h2 className="text-6xl font-bold text-gray-900 mb-4">{title}</h2>
 <p className="text-2xl text-red-100 font-semibold mb-3">{subtitle}</p>
 <p className="text-xl text-red-200 mx-auto leading-relaxed">{description}</p>
 </div>

 <div className="grid grid-cols-4 gap-4 mb-8">
 {stats.map((stat, index) => (
 <div key={index} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-300/25">
 <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
 <div className="text-red-100 text-sm font-semibold">{stat.label}</div>
 </div>
 ))}
 </div>

 <div className="flex gap-6 justify-center mb-6">
 <button className="bg-white text-red-600 px-12 py-4 rounded-xl font-bold text-xl hover:bg-red-50 transition-all transform hover:scale-105 shadow-2xl">
 {ctaText}
 </button>
 <button className="bg-red-700 text-gray-900 border-3 border-gray-300 px-12 py-4 rounded-xl font-bold text-xl hover:bg-red-800 transition-all transform hover:scale-105 shadow-2xl">
 {secondaryCtaText}
 </button>
 </div>

 <div className="grid grid-cols-3 gap-4 mx-auto">
 {features.map((feature, index) => (
 <div key={index} className="flex items-center gap-2 text-gray-900 justify-center">
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
XLCTA.blockMeta = {
 id: 'cta-4',
 name: 'XL CTA',
 category: 'ctas',
 height: 'h-80',
 defaultData: {
 title: 'Ready to Accelerate Your Growth?',
 subtitle: 'Join thousands of successful businesses',
 description: 'Everything you need to scale your business, all in one powerful platform',
 ctaText: 'Start Your Free Trial',
 secondaryCtaText: 'Book a Demo',
 stats: [
 { value: '10,000+', label: 'Active Users' },
 { value: '99.9%', label: 'Uptime' },
 { value: '4.9/5', label: 'Rating' },
 { value: '24/7', label: 'Support' }
 ],
 features: ['Free 14-day trial', 'No credit card required', 'Cancel anytime', 'Full feature access', 'Priority support', 'Money-back guarantee']
 },
 // Tree structure definition
 getTree: (data = {}) => {
 const stats = data.stats || [
 { value: '10,000+', label: 'Active Users' },
 { value: '99.9%', label: 'Uptime' },
 { value: '4.9/5', label: 'Rating' },
 { value: '24/7', label: 'Support' }
 ];
 const features = data.features || ['Free 14-day trial', 'No credit card required', 'Cancel anytime', 'Full feature access', 'Priority support', 'Money-back guarantee'];

 return {
 id: 'xl-cta-root',
 tag: 'section',
 label: 'CTA Container',
 className: 'w-full flex items-center justify-center px-8 py-10',
 children: [
 {
 id: 'xl-cta-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'w-full',
 children: [
 {
 id: 'xl-cta-header',
 tag: 'div',
 label: 'Header Section',
 className: 'text-center mb-8',
 children: [
 {
 id: 'xl-cta-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'Ready to Accelerate Your Growth?',
 className: 'text-6xl font-bold text-gray-900 mb-4',
 editable: true
 },
 {
 id: 'xl-cta-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Join thousands of successful businesses',
 className: 'text-2xl text-red-100 font-semibold mb-3',
 editable: true
 },
 {
 id: 'xl-cta-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'Everything you need to scale your business, all in one powerful platform',
 className: 'text-xl text-red-200 mx-auto leading-relaxed',
 editable: true
 }
 ]
 },
 {
 id: 'xl-cta-stats',
 tag: 'div',
 label: 'Stats Grid',
 className: 'grid grid-cols-4 gap-4 mb-8',
 children: stats.map((stat, index) => ({
 id: `xl-cta-stat-${index}`,
 tag: 'div',
 label: `Stat ${index + 1}`,
 className: 'bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-300/25',
 children: [
 {
 id: `xl-cta-stat-value-${index}`,
 tag: 'div',
 label: 'Stat Value',
 content: stat.value,
 className: 'text-3xl font-bold text-gray-900 mb-1',
 editable: true
 },
 {
 id: `xl-cta-stat-label-${index}`,
 tag: 'div',
 label: 'Stat Label',
 content: stat.label,
 className: 'text-red-100 text-sm font-semibold',
 editable: true
 }
 ]
 }))
 },
 {
 id: 'xl-cta-button-group',
 tag: 'div',
 label: 'Button Group',
 className: 'flex gap-6 justify-center mb-6',
 children: [
 {
 id: 'xl-cta-primary-button',
 tag: 'button',
 label: 'Primary Button',
 content: data.ctaText || 'Start Your Free Trial',
 className: 'bg-white text-red-600 px-12 py-4 rounded-xl font-bold text-xl hover:bg-red-50 transition-all transform hover:scale-105 shadow-2xl',
 editable: true
 },
 {
 id: 'xl-cta-secondary-button',
 tag: 'button',
 label: 'Secondary Button',
 content: data.secondaryCtaText || 'Book a Demo',
 className: 'bg-red-700 text-gray-900 border-3 border-gray-300 px-12 py-4 rounded-xl font-bold text-xl hover:bg-red-800 transition-all transform hover:scale-105 shadow-2xl',
 editable: true
 }
 ]
 },
 {
 id: 'xl-cta-features',
 tag: 'div',
 label: 'Features Grid',
 className: 'grid grid-cols-3 gap-4 mx-auto',
 children: features.map((feature, index) => ({
 id: `xl-cta-feature-${index}`,
 tag: 'div',
 label: `Feature ${index + 1}`,
 className: 'flex items-center gap-2 text-gray-900 justify-center',
 children: [
 {
 id: `xl-cta-feature-icon-${index}`,
 tag: 'span',
 label: 'Checkmark',
 content: '✓',
 className: 'text-xl',
 editable: false
 },
 {
 id: `xl-cta-feature-text-${index}`,
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

export default XLCTA;
