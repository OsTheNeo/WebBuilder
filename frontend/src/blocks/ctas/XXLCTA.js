import React from 'react';

const XXLCTA = ({ data = {} }) => {
 const {
 title = 'The Future of Your Business Starts Here',
 subtitle = 'Trusted by industry leaders worldwide',
 description = 'Transform your operations with our all-in-one platform. Powerful features, unbeatable support, guaranteed results.',
 ctaText = 'Start Free Trial',
 secondaryCtaText = 'Schedule Demo',
 tertiaryCtaText = 'View Pricing',
 stats = [
 { value: '50K+', label: 'Happy Customers', icon: '👥' },
 { value: '99.99%', label: 'Uptime SLA', icon: '⚡' },
 { value: '4.9/5', label: 'Average Rating', icon: '⭐' },
 { value: '<2min', label: 'Support Response', icon: '💬' }
 ],
 features = [
 'Full 30-day free trial',
 'No credit card required',
 'Cancel anytime, no fees',
 'All premium features included',
 'Priority 24/7 support',
 'Money-back guarantee',
 'Free onboarding & training',
 'Dedicated account manager'
 ],
 badges = ['SOC 2 Certified', 'GDPR Compliant', 'ISO 27001', 'PCI DSS']
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-8 py-12">
 <div className="w-full">
 <div className="text-center mb-10">
 <h2 className="text-7xl font-extrabold text-gray-900 mb-5 bg-clip-text text-transparent leading-tight">
 {title}
 </h2>
 <p className="text-3xl text-red-100 font-bold mb-3">{subtitle}</p>
 <p className="text-xl text-red-200 mx-auto leading-relaxed">{description}</p>
 </div>

 <div className="grid grid-cols-4 gap-4 mb-8">
 {stats.map((stat, index) => (
 <div key={index} className="bg-white/15 backdrop-blur-lg rounded-2xl p-5 text-center border-2 border-gray-300/30 hover:bg-white/25 transition-all transform hover:scale-105">
 <div className="text-4xl mb-2">{stat.icon}</div>
 <div className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
 <div className="text-red-100 font-semibold">{stat.label}</div>
 </div>
 ))}
 </div>

 <div className="flex gap-4 justify-center mb-8">
 <button className="bg-white text-red-600 px-14 py-5 rounded-2xl font-bold text-xl hover:bg-red-50 transition-all transform hover:scale-110 shadow-2xl">
 {ctaText}
 </button>
 <button className="bg-indigo-600 text-white border-3 border-gray-300 px-14 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all transform hover:scale-110 shadow-2xl">
 {secondaryCtaText}
 </button>
 <button className="bg-transparent text-gray-900 border-3 border-gray-300 px-14 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all transform hover:scale-110">
 {tertiaryCtaText}
 </button>
 </div>

 <div className="grid grid-cols-4 gap-3 mb-6">
 {features.map((feature, index) => (
 <div key={index} className="flex items-center gap-2 text-gray-900 justify-center bg-white/10 rounded-lg px-3 py-2">
 <span className="text-xl font-bold">✓</span>
 <span className="font-semibold text-sm">{feature}</span>
 </div>
 ))}
 </div>

 <div className="flex gap-4 justify-center">
 {badges.map((badge, index) => (
 <div key={index} className="bg-white/20 backdrop-blur-sm text-gray-900 text-sm font-bold px-4 py-2 rounded-full border border-gray-300/30">
 {badge}
 </div>
 ))}
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
XXLCTA.blockMeta = {
 id: 'cta-5',
 name: 'XXL CTA',
 category: 'ctas',
 height: 'h-96',
 defaultData: {
 title: 'The Future of Your Business Starts Here',
 subtitle: 'Trusted by industry leaders worldwide',
 description: 'Transform your operations with our all-in-one platform. Powerful features, unbeatable support, guaranteed results.',
 ctaText: 'Start Free Trial',
 secondaryCtaText: 'Schedule Demo',
 tertiaryCtaText: 'View Pricing',
 stats: [
 { value: '50K+', label: 'Happy Customers', icon: '👥' },
 { value: '99.99%', label: 'Uptime SLA', icon: '⚡' },
 { value: '4.9/5', label: 'Average Rating', icon: '⭐' },
 { value: '<2min', label: 'Support Response', icon: '💬' }
 ],
 features: [
 'Full 30-day free trial',
 'No credit card required',
 'Cancel anytime, no fees',
 'All premium features included',
 'Priority 24/7 support',
 'Money-back guarantee',
 'Free onboarding & training',
 'Dedicated account manager'
 ],
 badges: ['SOC 2 Certified', 'GDPR Compliant', 'ISO 27001', 'PCI DSS']
 },
 // Tree structure definition
 getTree: (data = {}) => {
 const stats = data.stats || [
 { value: '50K+', label: 'Happy Customers', icon: '👥' },
 { value: '99.99%', label: 'Uptime SLA', icon: '⚡' },
 { value: '4.9/5', label: 'Average Rating', icon: '⭐' },
 { value: '<2min', label: 'Support Response', icon: '💬' }
 ];
 const features = data.features || [
 'Full 30-day free trial',
 'No credit card required',
 'Cancel anytime, no fees',
 'All premium features included',
 'Priority 24/7 support',
 'Money-back guarantee',
 'Free onboarding & training',
 'Dedicated account manager'
 ];
 const badges = data.badges || ['SOC 2 Certified', 'GDPR Compliant', 'ISO 27001', 'PCI DSS'];

 return {
 id: 'xxl-cta-root',
 tag: 'section',
 label: 'CTA Container',
 className: 'w-full flex items-center justify-center px-8 py-12',
 children: [
 {
 id: 'xxl-cta-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'w-full',
 children: [
 {
 id: 'xxl-cta-header',
 tag: 'div',
 label: 'Header Section',
 className: 'text-center mb-10',
 children: [
 {
 id: 'xxl-cta-title',
 tag: 'h2',
 label: 'Title',
 content: data.title || 'The Future of Your Business Starts Here',
 className: 'text-7xl font-extrabold text-gray-900 mb-5 bg-clip-text text-transparent leading-tight',
 editable: true
 },
 {
 id: 'xxl-cta-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Trusted by industry leaders worldwide',
 className: 'text-3xl text-red-100 font-bold mb-3',
 editable: true
 },
 {
 id: 'xxl-cta-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'Transform your operations with our all-in-one platform. Powerful features, unbeatable support, guaranteed results.',
 className: 'text-xl text-red-200 mx-auto leading-relaxed',
 editable: true
 }
 ]
 },
 {
 id: 'xxl-cta-stats',
 tag: 'div',
 label: 'Stats Grid',
 className: 'grid grid-cols-4 gap-4 mb-8',
 children: stats.map((stat, index) => ({
 id: `xxl-cta-stat-${index}`,
 tag: 'div',
 label: `Stat ${index + 1}`,
 className: 'bg-white/15 backdrop-blur-lg rounded-2xl p-5 text-center border-2 border-gray-300/30 hover:bg-white/25 transition-all transform hover:scale-105',
 children: [
 {
 id: `xxl-cta-stat-icon-${index}`,
 tag: 'div',
 label: 'Stat Icon',
 content: stat.icon,
 className: 'text-4xl mb-2',
 editable: true
 },
 {
 id: `xxl-cta-stat-value-${index}`,
 tag: 'div',
 label: 'Stat Value',
 content: stat.value,
 className: 'text-4xl font-bold text-gray-900 mb-1',
 editable: true
 },
 {
 id: `xxl-cta-stat-label-${index}`,
 tag: 'div',
 label: 'Stat Label',
 content: stat.label,
 className: 'text-red-100 font-semibold',
 editable: true
 }
 ]
 }))
 },
 {
 id: 'xxl-cta-button-group',
 tag: 'div',
 label: 'Button Group',
 className: 'flex gap-4 justify-center mb-8',
 children: [
 {
 id: 'xxl-cta-primary-button',
 tag: 'button',
 label: 'Primary Button',
 content: data.ctaText || 'Start Free Trial',
 className: 'bg-white text-red-600 px-14 py-5 rounded-2xl font-bold text-xl hover:bg-red-50 transition-all transform hover:scale-110 shadow-2xl',
 editable: true
 },
 {
 id: 'xxl-cta-secondary-button',
 tag: 'button',
 label: 'Secondary Button',
 content: data.secondaryCtaText || 'Schedule Demo',
 className: 'bg-indigo-600 text-white border-3 border-gray-300 px-14 py-5 rounded-2xl font-bold text-xl hover:bg-indigo-700 transition-all transform hover:scale-110 shadow-2xl',
 editable: true
 },
 {
 id: 'xxl-cta-tertiary-button',
 tag: 'button',
 label: 'Tertiary Button',
 content: data.tertiaryCtaText || 'View Pricing',
 className: 'bg-transparent text-gray-900 border-3 border-gray-300 px-14 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all transform hover:scale-110',
 editable: true
 }
 ]
 },
 {
 id: 'xxl-cta-features',
 tag: 'div',
 label: 'Features Grid',
 className: 'grid grid-cols-4 gap-3 mb-6',
 children: features.map((feature, index) => ({
 id: `xxl-cta-feature-${index}`,
 tag: 'div',
 label: `Feature ${index + 1}`,
 className: 'flex items-center gap-2 text-gray-900 justify-center bg-white/10 rounded-lg px-3 py-2',
 children: [
 {
 id: `xxl-cta-feature-icon-${index}`,
 tag: 'span',
 label: 'Checkmark',
 content: '✓',
 className: 'text-xl font-bold',
 editable: false
 },
 {
 id: `xxl-cta-feature-text-${index}`,
 tag: 'span',
 label: 'Feature Text',
 content: feature,
 className: 'font-semibold text-sm',
 editable: true
 }
 ]
 }))
 },
 {
 id: 'xxl-cta-badges',
 tag: 'div',
 label: 'Badges Container',
 className: 'flex gap-4 justify-center',
 children: badges.map((badge, index) => ({
 id: `xxl-cta-badge-${index}`,
 tag: 'div',
 label: `Badge ${index + 1}`,
 content: badge,
 className: 'bg-white/20 backdrop-blur-sm text-gray-900 text-sm font-bold px-4 py-2 rounded-full border border-gray-300/30',
 editable: true
 }))
 }
 ]
 }
 ]
 };
 }
};

export default XXLCTA;
