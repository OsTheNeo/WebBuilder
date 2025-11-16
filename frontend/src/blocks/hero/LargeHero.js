import React from 'react';

const LargeHero = ({ data = {} }) => {
 const {
 title = 'Transform Your Vision',
 subtitle = 'The complete solution for modern web development',
 description = 'Build, deploy, and scale your applications with confidence using our comprehensive platform.',
 ctaText = 'Get Started Free',
 secondaryCtaText = 'View Demo'
 } = data;

 return (
 <section className="w-full flex items-center justify-center px-16 py-16">
 <div className="text-center max-w-4xl">
 <h1 className="text-5xl font-bold mb-4 text-gray-900">{title}</h1>
 <p className="text-gray-700 text-xl mb-3">{subtitle}</p>
 <p className="text-gray-600 text-base mb-8 max-w-2xl mx-auto">{description}</p>
 <div className="flex gap-4 justify-center">
 <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-all transform hover:scale-105">
 {ctaText}
 </button>
 <button className="bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all">
 {secondaryCtaText}
 </button>
 </div>
 </div>
 </section>
 );
};

// Block metadata and structure for tree mapping
LargeHero.blockMeta = {
 id: 'hero-3',
 name: 'Large Hero',
 category: 'hero',
 height: 'h-64',
 defaultData: {
 title: 'Transform Your Vision',
 subtitle: 'The complete solution for modern web development',
 description: 'Build, deploy, and scale your applications with confidence using our comprehensive platform.',
 ctaText: 'Get Started Free',
 secondaryCtaText: 'View Demo'
 },
 getTree: (data = {}) => ({
 id: 'large-hero-root',
 tag: 'section',
 label: 'Hero Section',
 className: 'w-full flex items-center justify-center px-16 py-16',
 children: [
 {
 id: 'large-hero-wrapper',
 tag: 'div',
 label: 'Content Wrapper',
 className: 'text-center max-w-4xl',
 children: [
 {
 id: 'large-hero-title',
 tag: 'h1',
 label: 'Title',
 content: data.title || 'Transform Your Vision',
 className: 'text-5xl font-bold mb-4 text-gray-900',
 editable: true
 },
 {
 id: 'large-hero-subtitle',
 tag: 'p',
 label: 'Subtitle',
 content: data.subtitle || 'The complete solution for modern web development',
 className: 'text-gray-700 text-xl mb-3',
 editable: true
 },
 {
 id: 'large-hero-description',
 tag: 'p',
 label: 'Description',
 content: data.description || 'Build, deploy, and scale your applications with confidence using our comprehensive platform.',
 className: 'text-gray-600 text-base mb-8 max-w-2xl mx-auto',
 editable: true
 },
 {
 id: 'large-hero-cta-wrapper',
 tag: 'div',
 label: 'CTA Wrapper',
 className: 'flex gap-4 justify-center',
 children: [
 {
 id: 'large-hero-primary-cta',
 tag: 'button',
 label: 'Primary CTA',
 content: data.ctaText || 'Get Started Free',
 className: 'bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition-all transform hover:scale-105',
 editable: true
 },
 {
 id: 'large-hero-secondary-cta',
 tag: 'button',
 label: 'Secondary CTA',
 content: data.secondaryCtaText || 'View Demo',
 className: 'bg-transparent border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all',
 editable: true
 }
 ]
 }
 ]
 }
 ]
 })
};

export default LargeHero;
