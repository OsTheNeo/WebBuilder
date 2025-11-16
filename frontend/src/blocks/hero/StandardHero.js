import React from 'react';

const StandardHero = ({ data = {} }) => {
 const {
 title = 'Build the Future',
 subtitle = 'Create stunning websites with our powerful platform',
 ctaText = 'Start Building',
 secondaryCtaText = 'Learn More'
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-12 py-16">
 <div className="text-center">
 <h1 className="text-4xl font-bold mb-3 text-gray-900">{title}</h1>
 <p className="text-gray-600 text-lg mb-6">{subtitle}</p>
 <div className="flex gap-4 justify-center">
 <button className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
 {ctaText}
 </button>
 <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
 {secondaryCtaText}
 </button>
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
StandardHero.blockMeta = {
 id: 'hero-2',
 name: 'Standard Hero',
 category: 'hero',
 height: 'h-48',
 defaultData: {
 title: 'Build the Future',
 subtitle: 'Create stunning websites with our powerful platform',
 ctaText: 'Start Building',
 secondaryCtaText: 'Learn More'
 },
 getTree: (data = {}) => ({
 id: 'standard-hero-root',
 tag: 'section',
 label: 'Hero Section',
 className: 'w-full flex items-center justify-center px-12 py-16',
 children: [
 {
 id: 'standard-hero-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'text-center',
 children: [
 {
 id: 'standard-hero-title',
 tag: 'h1',
 label: 'Title',
 content: data.title || 'Build the Future',
 className: 'text-4xl font-bold mb-3 text-gray-900',
 editable: true
 },
 {
 id: 'standard-hero-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'Create stunning websites with our powerful platform',
 className: 'text-gray-600 text-lg mb-6',
 editable: true
 },
 {
 id: 'standard-hero-cta-wrapper',
 tag: 'div',
 label: 'CTA Wrapper',
 className: 'flex gap-4 justify-center',
 children: [
 {
 id: 'standard-hero-primary-cta',
 tag: 'button',
 label: 'Primary CTA',
 content: data.ctaText || 'Start Building',
 className: 'bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors',
 editable: true
 },
 {
 id: 'standard-hero-secondary-cta',
 tag: 'button',
 label: 'Secondary CTA',
 content: data.secondaryCtaText || 'Learn More',
 className: 'bg-gray-100 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors',
 editable: true
 }
 ]
 }
 ]
 }
 ]
 })
};

export default StandardHero;
